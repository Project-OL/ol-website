import { HomeHero } from '../components/home/HomeHero'
import { HomeValueSection } from '../components/home/HomeValueSection'
import { HomePkBattlesSection } from '../components/home/HomePkBattlesSection'
import { HomeTalentSection } from '../components/home/HomeTalentSection'
import { HomePremiumSection } from '../components/home/HomePremiumSection'
import { SiteFooter } from '../components/layout/SiteFooter'

export function HomePage() {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeValueSection />
      <HomePkBattlesSection />
      <HomeTalentSection />
      <HomePremiumSection />
      <SiteFooter />
    </main>
  )
}
