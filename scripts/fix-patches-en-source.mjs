/**
 * Rebuilds patches for given locale codes from English strings (en|xx).
 * Usage: node scripts/fix-patches-en-source.mjs hi ar
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/i18n/locales/en.json'), 'utf8'))
const patchesDir = path.join(__dirname, 'patches')

const MM = {
  hi: 'hi',
  ar: 'ar',
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function translate(text, target) {
  if (!text.trim()) return text
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${MM[target]}`
  const res = await fetch(url)
  const data = await res.json()
  const raw = data.responseData?.translatedText
  if (!raw || String(raw).includes('MYMEMORY')) return text
  return raw
}

function pickPatchShape(enRoot) {
  return {
    header: { currentLanguageFallback: enRoot.header.currentLanguageFallback },
    contact: { ...enRoot.contact },
    cooperation: { ...enRoot.cooperation },
    privacyPolicy: { ...enRoot.privacyPolicy },
    termsOfService: { ...enRoot.termsOfService },
    hostAgreement: { ...enRoot.hostAgreement },
    coinRechargePolicy: { ...enRoot.coinRechargePolicy },
    childSafetyPolicy: { ...enRoot.childSafetyPolicy },
    footer: {
      legalContactEmail: enRoot.footer.legalContactEmail,
      legalContactEmailAria: enRoot.footer.legalContactEmailAria,
    },
  }
}

function mapStrings(obj, fn) {
  if (typeof obj === 'string') return fn(obj)
  if (Array.isArray(obj)) return obj.map((x) => mapStrings(x, fn))
  if (obj && typeof obj === 'object') {
    const out = {}
    for (const k of Object.keys(obj)) out[k] = mapStrings(obj[k], fn)
    return out
  }
  return obj
}

async function buildForTarget(target) {
  const shape = pickPatchShape(en)
  const strings = new Set()
  ;(function walk(x) {
    if (typeof x === 'string') strings.add(x)
    else if (x && typeof x === 'object') Object.values(x).forEach(walk)
  })(shape)

  const list = [...strings]
  const table = {}
  let i = 0
  for (const s of list) {
    i += 1
    process.stdout.write(`\r${target} ${i}/${list.length}`)
    table[s] = await translate(s, target)
    await sleep(280)
  }
  console.log('')
  const tr = (s) => table[s] ?? s
  return mapStrings(shape, tr)
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : ['hi', 'ar']

for (const t of targets) {
  if (!MM[t]) continue
  const patch = await buildForTarget(t)
  fs.writeFileSync(path.join(patchesDir, `${t}.json`), `${JSON.stringify(patch, null, 2)}\n`, 'utf8')
  console.log('Wrote', t + '.json')
}
