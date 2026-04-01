import talentIllustration from '../../assets/images/talent-illustrations.png'
import { useI18n } from '../../i18n/useI18n.js'
import './HomeTalentSection.css'

export function HomeTalentSection() {
  const { t } = useI18n()
  return (
    <section
      className="page-section page-section--surface home-talent-section"
      aria-labelledby="home-talent-heading"
    >
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="page-section__content home-talent-section__canvas">
        <h2 id="home-talent-heading" className="home-talent-section__heading">
          <span className="home-talent-section__heading-line">{t('talent.line1')}</span>
          <span className="home-talent-section__heading-line">{t('talent.line2')}</span>
        </h2>

        <figure className="home-talent-section__figure">
          <img
            src={talentIllustration}
            alt={t('talent.altImage')}
            width={478}
            height={372}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="home-talent-section__body">
          <p>{t('talent.p1')}<br/>{t('talent.p2')}<br/>{t('talent.p3')}<br/>{t('talent.p4')}</p>
        </div>
      </div>
    </section>
  )
}
