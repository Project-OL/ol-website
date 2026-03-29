import { useI18n } from '../i18n/useI18n.js'
import { HeroHeader } from '../components/home/HeroHeader'
import { LegalDocumentBlocks } from '../components/legal/LegalDocumentBlocks.jsx'
import { pickLegal } from '../i18n/legal/pickLegal.js'
import coinEn from '../i18n/legal/coin.en.js'
import coinNe from '../i18n/legal/coin.ne.js'
import coinImg from '../assets/images/coin.png'
import './CoinRechargePolicyPage.css'

/**
 * Legal copy from Offoo Coin Policy (PDF). Do not paraphrase.
 */
export function CoinRechargePolicyPage() {
  const { t, locale } = useI18n()
  const doc = pickLegal(locale, coinEn, coinNe)

  return (
    <main
      className="coin-recharge-policy-page page-section page-section--surface"
      aria-label={t('coinRechargePolicy.ariaMain')}
    >
      <div className="page-bg-blobs" aria-hidden>
        <div className="page-bg-blob page-bg-blob--amber" />
        <div className="page-bg-blob page-bg-blob--coral" />
      </div>

      <div className="coin-recharge-policy-page__scroll">
        <HeroHeader variant="surface" />

        <article className="coin-recharge-policy-page__canvas">
          <header className="coin-recharge-policy-page__hero">
            <h1 className="coin-recharge-policy-page__title">{doc.title}</h1>
            <p className="coin-recharge-policy-page__subtitle">{doc.subtitle}</p>
            <div className="coin-recharge-policy-page__coin-wrap">
              <img
                src={coinImg}
                alt=""
                width={680}
                height={480}
                decoding="async"
                className="coin-recharge-policy-page__coin"
              />
            </div>
          </header>

          <div className="coin-recharge-policy-page__body">
            <LegalDocumentBlocks classPrefix="coin-recharge-policy-page" blocks={doc.blocks} />
          </div>
        </article>
      </div>
    </main>
  )
}
