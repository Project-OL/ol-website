import pkIllustration from '../../assets/images/pk-battle-illustration.png'
import { useI18n } from '../../i18n/useI18n.js'
import './HomePkBattlesSection.css'

export function HomePkBattlesSection() {
  const { t } = useI18n()
  return (
    <section
      className="page-section page-section--surface home-pk-section"
      aria-labelledby="home-pk-heading"
    >
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="page-section__content home-pk-section__canvas">
        <h2 id="home-pk-heading" className="home-pk-section__heading">
          <span className="home-pk-section__heading-line">{t('pk.line1')}</span>
          <span className="home-pk-section__heading-line">{t('pk.line2')}</span>
        </h2>

        <figure className="home-pk-section__figure">
          <img
            src={pkIllustration}
            alt={t('pk.altImage')}
            width={611}
            height={397}
            decoding="async"
          />
        </figure>

        <p className="home-pk-section__body">{t('pk.body')}</p>
      </div>
    </section>
  )
}
