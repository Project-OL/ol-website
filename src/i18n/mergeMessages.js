/**
 * Deep-merge locale overrides onto English base so partial files stay small.
 */
export function mergeMessages(base, override) {
  if (!override || typeof override !== 'object') return base
  const out = Array.isArray(base) ? [...base] : { ...base }
  for (const key of Object.keys(override)) {
    const bv = base[key]
    const ov = override[key]
    if (ov && typeof ov === 'object' && !Array.isArray(ov) && bv && typeof bv === 'object' && !Array.isArray(bv)) {
      out[key] = mergeMessages(bv, ov)
    } else {
      out[key] = ov
    }
  }
  return out
}
