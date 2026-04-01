import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { SEO } from '../components/SEO.jsx'
import './CooperationPage.css'

const AGENT_STEPS = [1, 2, 3, 4, 5]
const RESP = ['resp1', 'resp2', 'resp3', 'resp4']
const REWARDS = ['rewards1', 'rewards2', 'rewards3', 'rewards4', 'rewards5']
const GROWTH = ['growth1', 'growth2', 'growth3', 'growth4']

export function CooperationPage() {
  const { t } = useI18n()

  return (
    <main
      className="cooperation-page page-section page-section--surface"
      aria-label={t('cooperation.ariaMain')}
    >
      <SEO
        title={t('seo.cooperationTitle')}
        description={t('seo.cooperationDescription')}
        path="/cooperation"
      />
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="cooperation-page__scroll">
        <HeroHeader variant="surface" />

        <div className="cooperation-page__canvas">
          <header className="cooperation-page__hero">
            <h1 className="cooperation-page__title">{t('cooperation.heroTitle')}</h1>
          </header>

          <div className="cooperation-page__text-column">
            <h2 className="cooperation-page__h2">{t('cooperation.becomeTitle')}</h2>
            <p className="cooperation-page__body">
              {t('cooperation.becomeTagline')} <br />
              {t('cooperation.becomeBody')}
            </p>

            <h2 className="cooperation-page__h2 margin-top-24">{t('cooperation.stepsTitle')}</h2>
            <p className="cooperation-page__body cooperation-page__steps-intro">{t('cooperation.stepsIntro')}</p>
            <ol className="cooperation-page__steps cooperation-page__steps--numbered">
              {AGENT_STEPS.map((n) => (
                <li key={n} className="cooperation-page__step">
                  <span className="cooperation-page__step-title">
                    {n}. {t(`cooperation.agentStep${n}Title`)}
                  </span>
                  <p className="cooperation-page__step-desc">{t(`cooperation.agentStep${n}Body`)}</p>
                </li>
              ))}
            </ol>
          </div>

          <section className="cooperation-page__band" aria-labelledby="cooperation-about-heading">
            <h2 id="cooperation-about-heading" className="cooperation-page__section-title">
              {t('cooperation.aboutTitle')}
            </h2>
            <div className="cooperation-page__text-column">
              <p className="cooperation-page__body">
                {t('cooperation.whatIsTitle')}
                <br />
                {t('cooperation.whatIsBody')} <br /> {t('cooperation.respTitle')}
                <br /> {t('cooperation.respIntro')}
                <br /> {t('cooperation.respIntro2')}
              </p>

              <ul className="cooperation-page__bullets">
                {RESP.map((key) => (
                  <li key={key}>{t(`cooperation.${key}`)}</li>
                ))}
              </ul>

              <p className="cooperation-page__body">
                {t('cooperation.commissionTitle')} <br />
                {t('cooperation.commissionBody')} <br /> {t('cooperation.commissionRange')}
              </p>

              <p className="cooperation-page__body">{t('cooperation.rewardsTitle')}</p>
              <p className="cooperation-page__body">
                {t('cooperation.rewardsSubTitle')}
                <br />
                {t('cooperation.rewardsIntro')}
              </p>
              <ul className="cooperation-page__bullets">
                {REWARDS.map((key) => (
                  <li key={key}>{t(`cooperation.${key}`)}</li>
                ))}
              </ul>

              <p className="cooperation-page__body">
                {t('cooperation.growthTitle')} <br />
                {t('cooperation.growthIntro')}
                <br />
                {t('cooperation.growthIntro2')}
              </p>
              <ul className="cooperation-page__bullets">
                {GROWTH.map((key) => (
                  <li key={key}>{t(`cooperation.${key}`)}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="cooperation-page__closing" aria-labelledby="cooperation-join-heading">
            <div className="cooperation-page__text-column cooperation-page__text-column--centered-block">
              <p className="cooperation-page__body">
                {t('cooperation.joinTitle')}
                <br />
                {t('cooperation.joinTagline')}
                <br />
                {t('cooperation.joinBody')}
              </p>
            </div>
            <div className="cooperation-page__cta-wrap">
              <a
                className="cooperation-page__cta"
                href={`mailto:business@offoolive.com?subject=${encodeURIComponent(t('cooperation.ctaMailSubject'))}`}
              >
                {t('cooperation.ctaApply')}
              </a>
            </div>
            <p className="cooperation-page__body">{t('cooperation.disclaimerTitle')}</p>
            <ul className="cooperation-page__bullets">
              <li>{t('cooperation.disclaimer1')}</li>
              <li>{t('cooperation.disclaimer2')}</li>
              <li>{t('cooperation.disclaimer3')}</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
