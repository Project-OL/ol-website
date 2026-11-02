import { useParams } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n.js'
import { useStoreLinks } from '../hooks/useStoreLinks.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { IconApple, IconPhone, IconPlay } from '../components/home/HomeValueSection.jsx'
import { SEO } from '../components/SEO.jsx'
import { ANDROID_PACKAGE, IOS_APP_SCHEME, PLAY_STORE_URL } from '../config/appLinks.js'
import '../components/home/HomeValueSection.css'
import './LiveSharePage.css'

/** Stream ids are UUIDs; anything else is a mangled link. */
const STREAM_ID_RE = /^[A-Za-z0-9-]{1,64}$/

function detectPlatform() {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return 'android'
  // iPadOS reports itself as a Mac.
  if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios'
  return 'other'
}

/** The app link for this device, or null when there's no way to open the app from here. */
function openInAppHref(platform, streamId) {
  if (platform === 'android') {
    // Explicit intent: Chrome opens the app's offoolive.com/live handler, or the Play Store when it isn't installed.
    const fallback = encodeURIComponent(PLAY_STORE_URL)
    return `intent://offoolive.com/live/${streamId}#Intent;scheme=https;package=${ANDROID_PACKAGE};S.browser_fallback_url=${fallback};end`
  }
  if (platform === 'ios' && IOS_APP_SCHEME) return `${IOS_APP_SCHEME}://live/${streamId}`
  return null
}

/**
 * Landing page for shared live links when the app didn't open them (not installed, or opened
 * in a browser). The app itself handles `/live/{streamId}` through App Links / universal links.
 */
export function LiveSharePage() {
  const { t } = useI18n()
  const { streamId = '' } = useParams()
  const store = useStoreLinks(t('common.comingSoon'))

  const valid = STREAM_ID_RE.test(streamId)
  const appHref = valid ? openInAppHref(detectPlatform(), streamId) : null

  return (
    <main className="live-share-page page-section page-section--surface" aria-labelledby="live-share-heading">
      <SEO
        title={t('liveShare.seoTitle')}
        description={t('liveShare.seoDescription')}
        path={valid ? `/live/${streamId}` : '/live'}
        noindex
      />
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="live-share-page__scroll">
        <HeroHeader variant="surface" />

        <div className="live-share-page__canvas">
          <h1 id="live-share-heading" className="live-share-page__title">
            {t('liveShare.title')}
          </h1>
          <p className="live-share-page__lede">{valid ? t('liveShare.lede') : t('liveShare.invalidLink')}</p>

          {appHref && (
            <a className="live-share-page__open" href={appHref}>
              {t('liveShare.openInApp')}
            </a>
          )}

          <p className="live-share-page__hint">{t('liveShare.noApp')}</p>
          <div className="live-share-page__stores">
            <a className="store-btn store-btn--app-store" {...store.appStore} aria-label={t('value.ariaAppStore')}>
              <IconApple />
              <span className="store-btn__label">{t('value.storeAppStore')}</span>
            </a>
            <a className="store-btn store-btn--google-play" {...store.googlePlay} aria-label={t('value.ariaGooglePlay')}>
              <IconPlay />
              <span className="store-btn__label">{t('value.storeGooglePlay')}</span>
            </a>
            <a className="store-btn store-btn--android" {...store.android} aria-label={t('value.ariaAndroid')}>
              <IconPhone />
              <span className="store-btn__label">{t('value.storeAndroid')}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
