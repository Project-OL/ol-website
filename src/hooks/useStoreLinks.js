import { useEffect, useState } from 'react'
import { ANDROID_LATEST_URL, APP_LINKS_URL, FALLBACK_LINKS } from '../config/appLinks.js'
import { handleComingSoonClick } from '../utils/showComingSoon.js'

const STORAGE_KEY = 'ol:app-links'
const FETCH_TIMEOUT_MS = 5000

/** One request per page load, shared by the home section and the footer. */
let pending = null

function readCachedLinks() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function fetchAppLinks() {
  if (!pending) {
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
    pending = fetch(APP_LINKS_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`app-links ${res.status}`)
        return res.json()
      })
      .then((links) => {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(links))
        } catch {
          /* storage unavailable */
        }
        return links
      })
      .finally(() => window.clearTimeout(timer))
    // Let a later mount retry after a failure.
    pending.catch(() => {
      pending = null
    })
  }
  return pending
}

function externalLink(url, onComingSoon) {
  return url
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: '#', onClick: onComingSoon }
}

function formatMb(bytes) {
  return `${Math.round(bytes / 1024 / 1024)} MB`
}

/**
 * Props for the App Store / Google Play / Android buttons. A link that isn't configured
 * keeps the "Coming soon" toast.
 */
export function useStoreLinks(comingSoonMessage) {
  const [links, setLinks] = useState(readCachedLinks)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let alive = true
    fetchAppLinks()
      .then((data) => {
        if (alive) setLinks(data)
      })
      .catch(() => {
        if (alive) setFailed(true)
      })
    return () => {
      alive = false
    }
  }, [])

  const onComingSoon = handleComingSoonClick(comingSoonMessage)
  const source = links ?? FALLBACK_LINKS

  let android
  if (links?.android) {
    android = {
      href: links.android.url,
      title: `Android · v${links.android.versionName} · ${formatMb(links.android.sizeBytes)}`,
    }
  } else if (!links && !failed) {
    // Still loading: the redirect endpoint always points at the current APK.
    android = { href: ANDROID_LATEST_URL }
  } else {
    android = { href: '#', onClick: onComingSoon }
  }

  return {
    appStore: externalLink(source.ios, onComingSoon),
    googlePlay: externalLink(source.playStore, onComingSoon),
    android,
  }
}
