import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import './ContactPage.css'

export function ContactPage() {
  const { t } = useI18n()

  return (
    <main
      className="contact-page page-section page-section--surface"
      aria-label={t('contact.ariaMain')}
    >
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="contact-page__scroll">
        <HeroHeader variant="surface" />

        <div className="contact-page__canvas">
          <header className="contact-page__hero">
            <h1 className="contact-page__title">{t('contact.heroTitle')}</h1>
            <p className="contact-page__lede">{t('contact.heroSubtitle')}</p>
            <div className="contact-page__actions">
              <a className="contact-page__btn" href="#partner">
                {t('contact.btnCollaborate')}
              </a>
              <a className="contact-page__btn" href="#assistance">
                {t('contact.btnSupport')}
              </a>
            </div>
          </header>

          <section className="contact-page__section contact-page__section--explore" aria-labelledby="contact-explore-heading">
            <h2 id="contact-explore-heading" className="contact-page__section-title">
              {t('contact.exploreTitle')}
            </h2>
            <div className="contact-page__prose">
              <p>{t('contact.journeyTitle')} <br/>{t('contact.journeyBody')}</p>
              <p>{t('contact.missionTitle')} <br/>{t('contact.missionBody')}</p>
              <p>{t('contact.visionTitle')} <br/>{t('contact.visionBody')}</p>
            </div>
          </section>

          <section
            id="assistance"
            className="contact-page__section contact-page__section--assistance"
            aria-labelledby="contact-assistance-heading"
          >
            <h2 id="contact-assistance-heading" className="contact-page__section-title">
              {t('contact.assistanceTitle')}
            </h2>
            <p className="contact-page__body">{t('contact.assistanceIntro')}</p>
            <ol className="contact-page__steps">
              <li className="contact-page__step">
                <div className="contact-page__step-body">
                  <p>
                    {t('contact.stepNumber1')} {t('contact.step1Title')} <br />
                    {t('contact.step1Body')}
                  </p>
                </div>
              </li>
              <li className="contact-page__step">
                <div className="contact-page__step-body">
                  <p>
                    {t('contact.stepNumber2')} {t('contact.step2Title')}
                    <br />
                    {t('contact.step2Body')}
                  </p>
                </div>
              </li>
              <li className="contact-page__step">
                <div className="contact-page__step-body">
                  <p>
                    {t('contact.stepNumber3')} {t('contact.step3Title')} <br />
                    {t('contact.step3Body')}
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section
            id="partner"
            className="contact-page__section contact-page__section--partner"
            aria-labelledby="contact-partner-heading"
          >
            <h2 id="contact-partner-heading" className="contact-page__section-title contact-page__section-title--center">
              {t('contact.partnerTitle')}
            </h2>
            <div className="contact-page__text-column">
              <p className="contact-page__body">{t('contact.partnerLede')}</p>
              <p className="contact-page__body">{t('contact.partnerSub')}</p>
              <p className="contact-page__body">{t('contact.partnerHint')}</p>
              <p className="contact-page__email-wrap">
                <a
                  className="contact-page__email"
                  href="mailto:business@offoolive.com"
                  aria-label={t('contact.emailBusinessAria')}
                >
                  business@offoolive.com
                </a>
              </p>
            </div>
          </section>

          <section className="contact-page__section contact-page__section--contact" aria-labelledby="contact-block-heading">
            <div className="contact-page__text-column">
              <h2 id="contact-block-heading" className="contact-page__section-title-contact">
                {t('contact.contactBlockTitle')}
              </h2>
              <p className="contact-page__body">{t('contact.otherTitle')}</p>
              <p className="contact-page__body">{t('contact.otherHint')}</p>
              <p className="contact-page__email-wrap">
                <a
                  className="contact-page__email"
                  href="mailto:support@offoolive.com"
                  aria-label={t('contact.emailSupportAria')}
                >
                  support@offoolive.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
