/**
 * Generates scripts/patches/<lang>.json from English (src/i18n/locales/en.json),
 * using the same key tree as patches/es.json, via MyMemory (en → target).
 * Run: npm run i18n:translate-patches
 * Cached in scripts/.translate-cache.json to avoid re-fetching.
 *
 * hi and ar are excluded: maintain scripts/patches/hi.json and ar.json by hand.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const patchesDir = path.join(__dirname, 'patches')
const enPath = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'en.json')
const cachePath = path.join(__dirname, '.translate-cache.json')

const LANGS = ['fr', 'de', 'pt', 'it', 'nl', 'ru', 'ja', 'ko', 'zh', 'id', 'th', 'vi', 'tr']

/** MyMemory target code (en|xx) */
const MM = {
  fr: 'fr',
  de: 'de',
  pt: 'pt',
  it: 'it',
  nl: 'nl',
  ru: 'ru',
  ja: 'ja',
  ko: 'ko',
  zh: 'zh-CN',
  id: 'id',
  th: 'th',
  vi: 'vi',
  tr: 'tr',
}

let cache = {}
if (fs.existsSync(cachePath)) {
  try {
    cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'))
  } catch {
    cache = {}
  }
}

function saveCache() {
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8')
}

async function translate(text, target) {
  const key = `${target}::${text}`
  if (cache[key]) return cache[key]
  if (!text.trim()) {
    cache[key] = text
    return text
  }
  const pair = `en|${MM[target] || target}`
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${pair}`
  const res = await fetch(url)
  const data = await res.json()
  const out =
    data.responseData?.translatedText && !String(data.responseData.translatedText).includes('MYMEMORY WARNING')
      ? data.responseData.translatedText
      : text
  cache[key] = out
  return out
}

function mapStrings(obj, fn) {
  if (typeof obj === 'string') return fn(obj)
  if (Array.isArray(obj)) return obj.map((x) => mapStrings(x, fn))
  if (obj && typeof obj === 'object') {
    const out = {}
    for (const k of Object.keys(obj)) {
      out[k] = mapStrings(obj[k], fn)
    }
    return out
  }
  return obj
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/** Same keys as patches/es.json; leaf strings from en.json where present, else Spanish fallback from shape. */
function templateFromEnShape(shape, enRoot, path = []) {
  if (typeof shape === 'string') {
    let v = enRoot
    for (const p of path) v = v?.[p]
    return typeof v === 'string' ? v : shape
  }
  if (shape && typeof shape === 'object' && !Array.isArray(shape)) {
    const out = {}
    for (const k of Object.keys(shape)) {
      out[k] = templateFromEnShape(shape[k], enRoot, [...path, k])
    }
    return out
  }
  return shape
}

async function main() {
  const shape = JSON.parse(fs.readFileSync(path.join(patchesDir, 'es.json'), 'utf8'))
  const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))
  const template = templateFromEnShape(shape, en)
  const strings = new Set()
  ;(function walk(x) {
    if (typeof x === 'string') strings.add(x)
    else if (x && typeof x === 'object') Object.values(x).forEach(walk)
  })(template)

  const list = [...strings]
  console.log('Unique strings:', list.length)

  const table = {}
  for (const target of LANGS) {
    table[target] = {}
    let i = 0
    for (const s of list) {
      i += 1
      process.stdout.write(`\r${target} ${i}/${list.length}`)
      table[target][s] = await translate(s, target)
      await sleep(220)
    }
    console.log('')
  }
  saveCache()

  for (const target of LANGS) {
    const tr = (s) => table[target][s] ?? s
    const patch = mapStrings(template, tr)
    fs.writeFileSync(path.join(patchesDir, `${target}.json`), `${JSON.stringify(patch, null, 2)}\n`, 'utf8')
  }

  console.log('Wrote patches for:', LANGS.join(', '))
}

main().catch((e) => {
  console.error(e)
  saveCache()
  process.exit(1)
})
