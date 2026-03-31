import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/useI18n.js'
import './SiteFooter.css'

function IconAppleSmall() {
  return (
    <svg className="site-footer__store-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.25 3.74-4.46.29 2.58-2.34 4.5-3.74 4.46z"
      />
    </svg>
  )
}

function IconPlaySmall() {
  return (
    <svg className="site-footer__store-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  )
}

function IconPhoneSmall() {
  return (
    <svg className="site-footer__store-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h10V5H7zm5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#f8f9f9"
        d="M13.5 22v-8.32h2.79l.42-3.24H13.5V8.58c0-.94.26-1.58 1.61-1.58h1.72V4.11A23.07 23.07 0 0 0 14.45 4c-2.5 0-4.21 1.52-4.21 4.32v2.12H7.45v3.24h2.79V22h3.26z"
      />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#f8f9f9" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.25" fill="none" stroke="#f8f9f9" strokeWidth="1.75" />
      <circle cx="17" cy="7" r="1.35" fill="#f8f9f9" />
    </svg>
  )
}

export function SiteFooter() {
  const { t } = useI18n()
  return (
    <footer
      className="page-section page-section--surface site-footer"
      aria-labelledby="site-footer-heading"
    >
      <div className="page-bg-blobs site-footer__blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="page-section__content site-footer__canvas">
        <div className="site-footer__lead">
          <h2 id="site-footer-heading" className="site-footer__headline">
            <span className="site-footer__headline-line">{t('footer.headline1')}</span>
            <span className="site-footer__headline-line">{t('footer.headline2')}</span>
            <span className="site-footer__headline-line">{t('footer.headline3')}</span>
          </h2>

          <p className="site-footer__download-label">{t('footer.downloadApp')}</p>

          <div className="site-footer__stores">
            <a className="site-footer__store site-footer__store--apple" href="#" aria-label={t('footer.ariaAppStore')}>
              <IconAppleSmall />
              <span>{t('footer.storeAppStore')}</span>
            </a>
            <a className="site-footer__store site-footer__store--google" href="#" aria-label={t('footer.ariaGooglePlay')}>
              <IconPlaySmall />
              <span>{t('footer.storeGooglePlay')}</span>
            </a>
            <a className="site-footer__store site-footer__store--android" href="#" aria-label={t('footer.ariaAndroid')}>
              <IconPhoneSmall />
              <span>{t('footer.storeAndroid')}</span>
            </a>
          </div>
        </div>

        <nav className="site-footer__col site-footer__col--security" aria-label={t('footer.navSecurity')}>
          <h3 className="site-footer__col-title">{t('footer.navSecurity')}</h3>
          <ul className="site-footer__links">
            <li>
              <Link className="site-footer__link site-footer__link--muted" to="/privacy-policy">
                {t('footer.linkPrivacy')}
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/terms-of-service">
                {t('footer.linkTerms')}
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/host-agreement">
                {t('footer.linkHost')}
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/recharge-agreement">
                {t('footer.linkRecharge')}
              </Link>
            </li>
            <li>
              <Link className="site-footer__link" to="/child-safety-policy">
                {t('footer.linkChild')}
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="site-footer__col site-footer__col--help" aria-label={t('footer.navHelp')}>
          <h3 className="site-footer__col-title site-footer__col-title--help">{t('footer.navHelp')}</h3>
          <ul className="site-footer__links">
            <li>
              <Link className="site-footer__link" to="/contact">
                {t('footer.linkContact')}
              </Link>
            </li>
            <li>
              <a className="site-footer__link" href="#">
                {t('footer.linkUpdates')}
              </a>
            </li>
            <li>
              <Link className="site-footer__link" to="/cooperation">
                {t('footer.linkBusiness')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="site-footer__social">
          <a
            className="site-footer__social-btn"
            href="#"
            aria-label={t('footer.ariaFacebook')}
          >
            <IconFacebook />
          </a>
          <a
            className="site-footer__social-btn"
            href="#"
            aria-label={t('footer.ariaInstagram')}
          >
            <IconInstagram />
          </a>
        </div>

        <div className="site-footer__legal">
          <span className="site-footer__copyright">{t('footer.copyright')}</span>
          <span className="site-footer__legal-sep" aria-hidden>
            |
          </span>
          <a
            className="site-footer__email"
            href="mailto:offoolive@gmail.com"
            aria-label={t('footer.legalContactEmailAria')}
          >
            {t('footer.legalContactEmail')}
          </a>
        </div>
      </div>

      {/* Horizontal accent: pale yellow (L) → peach → white (R), bottom 40px — ref. footer mock */}
      <div className="site-footer__bottom-gradient-bar" aria-hidden />
    </footer>
  )
}
