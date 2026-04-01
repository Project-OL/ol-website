import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import olLogo from '../../assets/images/ol-logo.png'
import { useI18n } from '../../i18n/useI18n.js'
import './HomeHero.css'

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3.5 5.25L7 8.75L10.5 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LogoMark() {
  return (
    <div className="hero-header__logo-mark" aria-hidden>
      <img
        src={olLogo}
        alt=""
        width={68}
        height={75}
        decoding="async"
        fetchPriority="high"
        className="hero-header__logo-img"
      />
    </div>
  )
}

const NAV_LINKS = [
  { id: 'home', navKey: 'homepage', to: '/' },
  { id: 'contact', navKey: 'contactUs', to: '/contact' },
  { id: 'cooperation', navKey: 'cooperation', to: '/cooperation' },
  { id: 'updates', navKey: 'updates', href: '#updates' },
]

/** Footer i18n keys — same labels as SiteFooter security links */
const POLICY_MENU_ITEMS = [
  { to: '/privacy-policy', msgKey: 'footer.linkPrivacy' },
  { to: '/terms-of-service', msgKey: 'footer.linkTerms' },
  { to: '/host-agreement', msgKey: 'footer.linkHost' },
  { to: '/recharge-agreement', msgKey: 'footer.linkRecharge' },
  { to: '/child-safety-policy', msgKey: 'footer.linkChild' },
]

function HeroHeader({ variant = 'hero' }) {
  const { pathname } = useLocation()
  const { locale, setLocale, t, languages } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [policiesOpen, setPoliciesOpen] = useState(false)
  const wrapRef = useRef(null)
  const policiesRef = useRef(null)

  const currentLabel = languages.find((l) => l.code === locale)?.label ?? t('header.currentLanguageFallback')

  useEffect(() => {
    if (!menuOpen && !policiesOpen) return
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
      if (policiesRef.current && !policiesRef.current.contains(e.target)) {
        setPoliciesOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setPoliciesOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, policiesOpen])

  const headerClass =
    variant === 'surface' ? 'hero-header hero-header--surface' : 'hero-header'

  return (
    <header className={headerClass}>
      <Link to="/" className="hero-header__brand">
        <LogoMark />
        <span className="hero-header__brand-text">{t('brand.name')}</span>
      </Link>

      <nav className="hero-header__nav" aria-label={t('header.primaryNavAria')}>
        <ul>
          {NAV_LINKS.map((item) => {
            const label = t(`nav.${item.navKey}`)
            if (item.to) {
              const active =
                item.to === '/'
                  ? pathname === '/' || pathname === ''
                  : pathname === item.to
              return (
                <li key={item.id}>
                  <Link to={item.to} className={active ? 'is-active' : undefined}>
                    {label}
                  </Link>
                </li>
              )
            }
            return (
              <li key={item.id}>
                <a href={item.href}>{label}</a>
              </li>
            )
          })}
          <li className="hero-header__nav-item hero-header__nav-item--policies" ref={policiesRef}>
            <button
              type="button"
              className={`hero-header__nav-trigger${policiesOpen ? ' is-open' : ''}`}
              aria-expanded={policiesOpen}
              aria-haspopup="true"
              aria-controls="hero-header-policies-menu"
              id="hero-header-policies-trigger"
              onClick={() => {
                setPoliciesOpen((o) => !o)
                setMenuOpen(false)
              }}
            >
              {t('nav.policies')}
              <ChevronDown className="hero-header__chevron" />
            </button>
            {policiesOpen ? (
              <ul
                id="hero-header-policies-menu"
                className="hero-header__policies-menu"
                aria-label={t('header.policiesMenuAria')}
              >
                {POLICY_MENU_ITEMS.map(({ href, to, msgKey }) => (
                  <li key={msgKey}>
                    {to ? (
                      <Link
                        to={to}
                        className="hero-header__policies-link"
                        onClick={() => setPoliciesOpen(false)}
                      >
                        {t(msgKey)}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="hero-header__policies-link"
                        onClick={() => setPoliciesOpen(false)}
                      >
                        {t(msgKey)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        </ul>
      </nav>

      <div className="hero-header__lang-wrap" ref={wrapRef}>
        <button
          type="button"
          className="hero-header__lang"
          aria-expanded={menuOpen}
          aria-haspopup="listbox"
          aria-label={t('header.langButtonAria')}
          onClick={() => {
            setMenuOpen((o) => !o)
            setPoliciesOpen(false)
          }}
        >
          <span>{currentLabel}</span>
          <ChevronDown className="hero-header__chevron hero-header__chevron--lang" />
        </button>
        {menuOpen ? (
          <ul
            className="hero-header__lang-menu"
            role="listbox"
            aria-label={t('header.langMenuAria')}
          >
            {languages.map((lang) => (
              <li key={lang.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === lang.code}
                  className={`hero-header__lang-option${locale === lang.code ? ' is-active' : ''}`}
                  onClick={() => {
                    setLocale(lang.code)
                    setMenuOpen(false)
                  }}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  )
}

export { HeroHeader }
