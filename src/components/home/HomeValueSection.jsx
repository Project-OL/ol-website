import { useI18n } from '../../i18n/useI18n.js'
import './HomeValueSection.css'

function IconApple() {
  return (
    <svg className="store-btn__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.25 3.74-4.46.29 2.58-2.34 4.5-3.74 4.46z"
      />
    </svg>
  )
}

function IconPlay() {
  return (
    <svg className="store-btn__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg className="store-btn__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h10V5H7zm5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </svg>
  )
}

export function HomeValueSection() {
  const { t } = useI18n()
  return (
      <section
        className="page-section page-section--surface home-value-section"
        aria-labelledby="home-value-heading"
      >
        <div className="page-bg-blobs" aria-hidden>
          <div className="page-bg-blob page-bg-blob--amber" />
          <div className="page-bg-blob page-bg-blob--coral" />
        </div>

        <div className="page-section__content home-value-section__inner">
          <header className="home-value-section__intro">
            <p className="home-value-section__lede">{t('value.title')} <br /> {t('value.lede')}</p>
          </header>

          <div className="home-value-section__stores">
            <a className="store-btn store-btn--app-store" href="#" aria-label={t('value.ariaAppStore')}>
              <IconApple />
              <span className="store-btn__label">{t('value.storeAppStore')}</span>
            </a>
            <a className="store-btn store-btn--google-play" href="#" aria-label={t('value.ariaGooglePlay')}>
              <IconPlay />
              <span className="store-btn__label">{t('value.storeGooglePlay')}</span>
            </a>
            <a className="store-btn store-btn--android" href="#" aria-label={t('value.ariaAndroid')}>
              <IconPhone />
              <span className="store-btn__label">{t('value.storeAndroid')}</span>
            </a>
          </div>
        </div>
        <div className="home-value-section__columns">
            <article className="home-value-section__col home-value-section__col--a">
              <h3 className="home-value-section__col-title">{t('value.colLiveTitle')}</h3>
              <p className="home-value-section__col-body">{t('value.colLiveBody')}</p>
            </article>
            <article className="home-value-section__col home-value-section__col--b">
              <h3 className="home-value-section__col-title">{t('value.colGiftsTitle')}</h3>
              <p className="home-value-section__col-body">{t('value.colGiftsBody')}</p>
            </article>
            <article className="home-value-section__col home-value-section__col--c">
              <h3 className="home-value-section__col-title">{t('value.colSubTitle')}</h3>
              <p className="home-value-section__col-body">{t('value.colSubBody')}</p>
            </article>
          </div>
      </section>
  )
}
