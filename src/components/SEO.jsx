import { Helmet } from 'react-helmet-async'
import { SITE_NAME, SITE_URL } from '../seo/siteConfig.js'

/**
 * Per-route SEO: title, description, canonical, Open Graph, Twitter.
 * @param {string} title - Full document title (include brand where useful for SERP).
 * @param {string} description - Meta description (~150–160 chars ideal).
 * @param {string} [path='/'] - Pathname for canonical & og:url (e.g. "/contact").
 * @param {string} [ogTitle] - Shorter share title; defaults to `title`.
 * @param {string} [ogDescription] - Share description; defaults to `description`.
 * @param {string} [ogType='website'] - og:type
 * @param {'summary'|'summary_large_image'} [twitterCard='summary'] - twitter:card
 * @param {boolean} [noindex=false]
 */
export function SEO({
  title,
  description,
  path = '/',
  ogTitle,
  ogDescription,
  ogType = 'website',
  twitterCard = 'summary',
  noindex = false,
}) {
  const normalizedPath =
    path === '' || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  const canonicalHref =
    normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`

  const shareTitle = ogTitle ?? title
  const shareDesc = ogDescription ?? description

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalHref} />

      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDesc} />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={shareTitle} />
      <meta name="twitter:description" content={shareDesc} />
    </Helmet>
  )
}
