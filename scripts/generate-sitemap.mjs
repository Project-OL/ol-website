/**
 * Regenerate public/sitemap.xml from src/seo/siteConfig.js
 * Run: npm run generate:sitemap
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { SITE_URL, SITE_ROUTES } from '../src/seo/siteConfig.js'

const root = dirname(fileURLToPath(import.meta.url))
const outPath = join(root, '..', 'public', 'sitemap.xml')

const body = SITE_ROUTES.map((path) => {
  const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
  const priority = path === '/' ? '1' : path.includes('policy') || path.includes('agreement') || path.includes('terms') ? '0.7' : '0.9'
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(outPath, xml, 'utf8')
console.log('Wrote', outPath)
