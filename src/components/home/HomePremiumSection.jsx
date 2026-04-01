import premiumIllustration from '../../assets/images/premium-illustrations.png'
import { useI18n } from '../../i18n/useI18n.js'
import './HomePremiumSection.css'

export function HomePremiumSection() {
  const { t } = useI18n()
  return (
    <section
      className="page-section page-section--surface home-premium-section"
      aria-labelledby="home-premium-heading"
    >
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="page-section__content home-premium-section__canvas">
        <h2 id="home-premium-heading" className="home-premium-section__heading">
          <span className="home-premium-section__heading-line">{t('premium.line1')}</span>
          <span className="home-premium-section__heading-line">{t('premium.line2')}</span>
        </h2>

        <figure className="home-premium-section__figure">
          <img
            src={premiumIllustration}
            alt={t('premium.altImage')}
            width={429}
            height={484}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <p className="home-premium-section__body">
          {t('premium.bodyBeforeBreak')}
          <br />
          {t('premium.bodyAfterBreak')}
        </p>
      </div>
    </section>
  )
}
