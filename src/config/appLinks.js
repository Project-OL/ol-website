/** ol-node-rest base. Store links are managed in the admin panel (System Settings → App downloads). */
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://api.offoolive.com/api/v1').replace(
  /\/+$/,
  '',
)

export const APP_LINKS_URL = `${API_BASE_URL}/app-links`

/** Always redirects to the current APK — used before the links have loaded. */
export const ANDROID_LATEST_URL = `${API_BASE_URL}/app-links/android/latest`

/** Optional build-time fallbacks for when the API can't be reached. */
export const FALLBACK_LINKS = {
  ios: import.meta.env.VITE_FALLBACK_IOS_URL || null,
  playStore: import.meta.env.VITE_FALLBACK_PLAY_STORE_URL || null,
}

/**
 * Share links `https://offoolive.com/live/{streamId}` open the app directly once it verifies
 * public/.well-known/assetlinks.json (Android) and apple-app-site-association (iOS).
 */
export const ANDROID_PACKAGE = 'com.offooLive'
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`

/**
 * Custom URL scheme the iOS app registers (e.g. "offoolive"). A universal link tapped on its own
 * domain stays in Safari, so the iPhone "Open in app" button needs it; unset hides that button.
 */
export const IOS_APP_SCHEME = import.meta.env.VITE_IOS_APP_SCHEME || null
