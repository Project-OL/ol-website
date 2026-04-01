import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { SEO } from '../components/SEO.jsx'
import { LegalDocumentBlocks } from '../components/legal/LegalDocumentBlocks.jsx'
import { pickLegal } from '../i18n/legal/pickLegal.js'
import hostEn from '../i18n/legal/host.en.js'
import hostNe from '../i18n/legal/host.ne.js'
import './HostAgreementPage.css'

/**
 * Legal copy from Offoo Live – Host Policy & Platform Rules (PDF). Do not paraphrase.
 */
export function HostAgreementPage() {
  const { t, locale } = useI18n()
  const doc = pickLegal(locale, hostEn, hostNe)

  return (
    <main
      className="host-agreement-page page-section page-section--surface"
      aria-label={t('hostAgreement.ariaMain')}
    >
      <SEO title={t('seo.hostTitle')} description={t('seo.hostDescription')} path="/host-agreement" />
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="host-agreement-page__scroll">
        <HeroHeader variant="surface" />

        <article className="host-agreement-page__canvas">
          <header className="host-agreement-page__hero">
            <h1 className="host-agreement-page__title">{doc.title}</h1>
          </header>

          <div className="host-agreement-page__body">
            <LegalDocumentBlocks classPrefix="host-agreement-page" blocks={doc.blocks} />
          </div>
        </article>
      </div>
    </main>
  )
}
