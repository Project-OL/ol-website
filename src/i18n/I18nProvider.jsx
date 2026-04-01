import { useCallback, useEffect, useMemo, useState } from 'react'
import { catalogs, SUPPORTED_LOCALES } from './catalog.js'
import { I18nContext } from './i18nContext.js'
import { LANGUAGES, normalizeLocale, pickSupportedLocale } from './languages.js'

const STORAGE_KEY = 'offoo-locale'

function resolvePath(obj, path) {
  return path.split('.').reduce((o, key) => (o != null ? o[key] : undefined), obj)
}

function readInitialLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LOCALES.has(stored)) return stored
  } catch {
    /* ignore */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language || 'en' : 'en'
  const full = normalizeLocale(nav)
  return pickSupportedLocale(full, SUPPORTED_LOCALES)
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(readInitialLocale)

  const setLocale = useCallback((code) => {
    if (!SUPPORTED_LOCALES.has(code)) return
    setLocaleState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* ignore */
    }
  }, [])

  const t = useCallback(
    (key) => {
      const cat = catalogs[locale] || catalogs.en
      let v = resolvePath(cat, key)
      if (v === undefined) v = resolvePath(catalogs.en, key)
      return v !== undefined && v !== null ? String(v) : key
    },
    [locale],
  )

  useEffect(() => {
    const html = document.documentElement
    html.lang = locale === 'zh' ? 'zh-Hans' : locale
    html.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      languages: LANGUAGES.filter((l) => SUPPORTED_LOCALES.has(l.code)),
    }),
    [locale, setLocale, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
