import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { LegalDocumentBlocks } from '../components/legal/LegalDocumentBlocks.jsx'
import { pickLegal } from '../i18n/legal/pickLegal.js'
import childEn from '../i18n/legal/child.en.js'
import childNe from '../i18n/legal/child.ne.js'
import childImg from '../assets/images/child.png'
import './ChildSafetyPolicyPage.css'

/**
 * Legal copy from Offoo Child Safety & Protection Policy (PDF). Do not paraphrase.
 */
export function ChildSafetyPolicyPage() {
  const { t, locale } = useI18n()
  const doc = pickLegal(locale, childEn, childNe)

  return (
    <main
      className="child-safety-policy-page page-section page-section--surface"
      aria-label={t('childSafetyPolicy.ariaMain')}
    >
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="child-safety-policy-page__scroll">
        <HeroHeader variant="surface" />

        <article className="child-safety-policy-page__canvas">
          <header className="child-safety-policy-page__hero">
            <h1 className="child-safety-policy-page__title">{doc.title}</h1>
            <p className="child-safety-policy-page__subtitle">{doc.subtitle}</p>
            <p className="child-safety-policy-page__tagline">{doc.tagline}</p>
            <div className="child-safety-policy-page__illustration-wrap">
              <img
                src={childImg}
                alt=""
                width={680}
                height={480}
                decoding="async"
                className="child-safety-policy-page__illustration"
              />
            </div>
          </header>

          <div className="child-safety-policy-page__body">
            <LegalDocumentBlocks classPrefix="child-safety-policy-page" blocks={doc.blocks} />
          </div>
        </article>
      </div>
    </main>
  )
}
