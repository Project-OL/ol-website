/**
 * Merges each locales/*.json onto en.json (full key parity), then applies
 * scripts/patches/<code>.json when present so route/feature strings stay translated.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { mergeMessages } from '../src/i18n/mergeMessages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.join(__dirname, '../src/i18n/locales')
const patchesDir = path.join(__dirname, 'patches')

const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'))

for (const file of fs.readdirSync(localesDir)) {
  if (!file.endsWith('.json') || file === 'en.json') continue
  const code = file.replace(/\.json$/, '')
  const filePath = path.join(localesDir, file)
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let out = mergeMessages(JSON.parse(JSON.stringify(en)), existing)
  const patchPath = path.join(patchesDir, `${code}.json`)
  if (fs.existsSync(patchPath)) {
    const patch = JSON.parse(fs.readFileSync(patchPath, 'utf8'))
    out = mergeMessages(out, patch)
  }
  fs.writeFileSync(filePath, `${JSON.stringify(out, null, 2)}\n`, 'utf8')
}
