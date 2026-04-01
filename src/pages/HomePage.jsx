import { HomeHero } from '../components/home/HomeHero'
import { HomeValueSection } from '../components/home/HomeValueSection'
import { HomePkBattlesSection } from '../components/home/HomePkBattlesSection'
import { HomeTalentSection } from '../components/home/HomeTalentSection'
import { HomePremiumSection } from '../components/home/HomePremiumSection'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SEO } from '../components/SEO.jsx'
import { useI18n } from '../i18n/useI18n.js'

export function HomePage() {
  const { t } = useI18n()

  return (
    <main className="home-page">
      <SEO
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        path="/"
        ogTitle={t('seo.homeOgTitle')}
      />
      <h1 className="visually-hidden">{t('seo.homeH1')}</h1>
      <HomeHero />
      <HomeValueSection />
      <HomePkBattlesSection />
      <HomeTalentSection />
      <HomePremiumSection />
      <SiteFooter />
    </main>
  )
}
