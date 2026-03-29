/** Legal copy defaults to English unless a full locale module exists (e.g. Nepali). */
export function pickLegal(locale, enDoc, neDoc) {
  if (locale === 'ne' && neDoc) return neDoc
  return enDoc
}
