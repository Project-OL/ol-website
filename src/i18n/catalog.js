import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import pt from './locales/pt.json'
import it from './locales/it.json'
import nl from './locales/nl.json'
import ru from './locales/ru.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import zh from './locales/zh.json'
import ar from './locales/ar.json'
import hi from './locales/hi.json'
import id from './locales/id.json'
import th from './locales/th.json'
import vi from './locales/vi.json'
import tr from './locales/tr.json'
import ne from './locales/ne.json'
import { mergeMessages } from './mergeMessages.js'

/** Full catalogs merged on English so missing keys never break (except en = source). */
export const catalogs = {
  en,
  es: mergeMessages(en, es),
  fr: mergeMessages(en, fr),
  de: mergeMessages(en, de),
  pt: mergeMessages(en, pt),
  it: mergeMessages(en, it),
  nl: mergeMessages(en, nl),
  ru: mergeMessages(en, ru),
  ja: mergeMessages(en, ja),
  ko: mergeMessages(en, ko),
  zh: mergeMessages(en, zh),
  ar: mergeMessages(en, ar),
  hi: mergeMessages(en, hi),
  id: mergeMessages(en, id),
  th: mergeMessages(en, th),
  vi: mergeMessages(en, vi),
  tr: mergeMessages(en, tr),
  ne: mergeMessages(en, ne),
}

export const SUPPORTED_LOCALES = new Set(Object.keys(catalogs))
