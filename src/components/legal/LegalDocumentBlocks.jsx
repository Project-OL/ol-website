/**
 * Renders policy body from locale JSON blocks: ["p", text], ["h2", text], ["ul", items], ["ol", items], ["label", text], ["mailto", prefix, email]
 */
export function LegalDocumentBlocks({ classPrefix, blocks }) {
  if (!Array.isArray(blocks)) return null

  return blocks.map((block, i) => {
    if (!Array.isArray(block) || block.length < 2) return null
    const [type, a, b] = block

    switch (type) {
      case 'p':
        return (
          <p key={i} className={`${classPrefix}__p`}>
            {a}
          </p>
        )
      case 'h2':
        return (
          <h2 key={i} className={`${classPrefix}__h2`}>
            {a}
          </h2>
        )
      case 'label':
        return (
          <p key={i} className={`${classPrefix}__label`}>
            {a}
          </p>
        )
      case 'ul':
        return (
          <ul key={i} className={`${classPrefix}__list`}>
            {a.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        )
      case 'ol':
        return (
          <ol key={i} className={`${classPrefix}__list`}>
            {a.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ol>
        )
      case 'mailto':
        return (
          <p key={i} className={`${classPrefix}__p`}>
            {a}{' '}
            <a className={`${classPrefix}__mailto`} href={`mailto:${b}`}>
              {b}
            </a>
          </p>
        )
      default:
        return null
    }
  })
}
