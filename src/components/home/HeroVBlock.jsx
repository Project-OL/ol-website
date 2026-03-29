import { useI18n } from '../../i18n/useI18n.js'

export function HeroVBlock() {
  const { t } = useI18n()
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
      <h2 className="hero-vblock__title">{t('vblock.toFriends')}</h2>
    </div>
  )
}
