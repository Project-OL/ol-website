import heroBg from '../../assets/images/offoo-hero-bg.png'

import { useI18n } from '../../i18n/useI18n.js'

import { HeroHeader } from './HeroHeader.jsx'

import { HeroFloatingDecor } from './HeroFloatingDecor'

import { HeroVBlock } from './HeroVBlock'



export function HomeHero() {

  const { t } = useI18n()

  return (

    <section className="home-hero" aria-label={t('hero.ariaSection')}>

      <div

        className="home-hero__bg"

        style={{ backgroundImage: `url(${heroBg})` }}

        role="img"

        aria-label={t('hero.ariaBg')}

      />

      <HeroHeader />

      <HeroFloatingDecor />

      <div className="home-hero__bottom-stack">
        <p className="home-hero__tagline">{t('hero.tagline')}</p>
        <HeroVBlock />
      </div>

    </section>

  )

}

