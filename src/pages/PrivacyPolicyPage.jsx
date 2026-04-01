import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { SEO } from '../components/SEO.jsx'
import { LegalDocumentBlocks } from '../components/legal/LegalDocumentBlocks.jsx'
import { pickLegal } from '../i18n/legal/pickLegal.js'
import privacyEn from '../i18n/legal/privacy.en.js'
import privacyNe from '../i18n/legal/privacy.ne.js'
import './PrivacyPolicyPage.css'

/**
 * Legal copy is taken verbatim from Offoo Privacy Policy (PDF). Do not paraphrase.
 * Locale-specific text: English (default) and Nepali; other UI languages use English legal body.
 */
export function PrivacyPolicyPage() {
  const { t, locale } = useI18n()
  const doc = pickLegal(locale, privacyEn, privacyNe)

  return (
    <main
      className="privacy-policy-page page-section page-section--surface"
      aria-label={t('privacyPolicy.ariaMain')}
    >
      <SEO title={t('seo.privacyTitle')} description={t('seo.privacyDescription')} path="/privacy-policy" />
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="privacy-policy-page__scroll">
        <HeroHeader variant="surface" />

        <article className="privacy-policy-page__canvas">
          <header className="privacy-policy-page__hero">
            <h1 className="privacy-policy-page__title">{doc.title}</h1>
          </header>

          <div className="privacy-policy-page__body">
            <LegalDocumentBlocks classPrefix="privacy-policy-page" blocks={doc.blocks} />
          </div>
        </article>
      </div>
    </main>
  )
}
