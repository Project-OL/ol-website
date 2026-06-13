import { useCallback, useEffect, useRef } from 'react'
import { useI18n } from '../../i18n/useI18n.js'

const TITLE_MAX_PX = 67.68
const TITLE_MIN_PX = 8

function fitTitleToContainer(titleEl) {
  const wrap = titleEl.parentElement
  if (!wrap) return

  const maxSize = Math.min(TITLE_MAX_PX, wrap.clientHeight * 0.95)
  let size = maxSize
  titleEl.style.fontSize = `${size}px`

  while (
    size > TITLE_MIN_PX &&
    (titleEl.scrollWidth > wrap.clientWidth || titleEl.scrollHeight > wrap.clientHeight)
  ) {
    size -= 0.5
    titleEl.style.fontSize = `${size}px`
  }
}

export function HeroVBlock() {
  const { t, locale } = useI18n()
  const titleRef = useRef(null)
  const label = t('vblock.toFriends')

  const fitTitle = useCallback(() => {
    if (titleRef.current) fitTitleToContainer(titleRef.current)
  }, [])

  useEffect(() => {
    fitTitle()
    const titleEl = titleRef.current
    const wrapEl = titleEl?.parentElement
    if (!titleEl || !wrapEl) return

    const ro = new ResizeObserver(() => fitTitle())
    ro.observe(wrapEl)
    ro.observe(titleEl)

    return () => ro.disconnect()
  }, [fitTitle, label, locale])

  return (
    <div className="hero-vblock">
      <div className="hero-vblock__sheen" aria-hidden />
      <div className="hero-vblock__top">
        <div className="hero-vblock__rec">
          <span className="hero-vblock__rec-dot" />
          <span className="hero-vblock__rec-label">{t('vblock.rec')}</span>
          <span className="hero-vblock__rec-time">00:00:00</span>
        </div>
        <div className="hero-vblock__live-pill">
          <span className="hero-vblock__live-dot" />
          <span className="hero-vblock__live-text">{t('vblock.live')}</span>
        </div>
      </div>
      <div className="hero-vblock__title-wrap">
        <h2 ref={titleRef} className="hero-vblock__title" title={label}>
          {label}
        </h2>
      </div>
    </div>
  )
}
