import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { SEO } from '../components/SEO.jsx'
import { LegalDocumentBlocks } from '../components/legal/LegalDocumentBlocks.jsx'
import { pickLegal } from '../i18n/legal/pickLegal.js'
import termsEn from '../i18n/legal/terms.en.js'
import termsNe from '../i18n/legal/terms.ne.js'
import './TermsOfServicePage.css'

/**
 * Legal copy is taken verbatim from Offoo Terms & Conditions (PDF). Do not paraphrase.
 */
export function TermsOfServicePage() {
  const { t, locale } = useI18n()
  const doc = pickLegal(locale, termsEn, termsNe)

  return (
    <main
      className="terms-of-service-page page-section page-section--surface"
      aria-label={t('termsOfService.ariaMain')}
    >
      <SEO title={t('seo.termsTitle')} description={t('seo.termsDescription')} path="/terms-of-service" />
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="terms-of-service-page__scroll">
        <HeroHeader variant="surface" />

        <article className="terms-of-service-page__canvas">
          <header className="terms-of-service-page__hero">
            <h1 className="terms-of-service-page__title">{doc.title}</h1>
          </header>

          <div className="terms-of-service-page__body">
            <LegalDocumentBlocks classPrefix="terms-of-service-page" blocks={doc.blocks} />
          </div>
        </article>
      </div>
    </main>
  )
}
