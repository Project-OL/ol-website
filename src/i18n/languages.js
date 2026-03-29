/** UI language options: `code` matches message catalog keys and <html lang>. */
export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'ru', label: 'Русский' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '简体中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'th', label: 'ไทย' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ne', label: 'नेपाली' },
]

const CANONICAL = {
  'zh-cn': 'zh',
  'zh-hans': 'zh',
  'pt-br': 'pt',
  'pt-pt': 'pt',
  'ne-np': 'ne',
}

export function normalizeLocale(code) {
  if (!code || typeof code !== 'string') return 'en'
  const lower = code.toLowerCase().replace('_', '-')
  const short = lower.split('-')[0]
  if (CANONICAL[lower]) return CANONICAL[lower]
  return short
}

export function pickSupportedLocale(preferred, supportedSet) {
  const n = normalizeLocale(preferred)
  if (supportedSet.has(n)) return n
  if (supportedSet.has(preferred)) return preferred
  return 'en'
}
