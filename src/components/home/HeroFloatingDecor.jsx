import heroFloatingDecor from '../../assets/images/hero-floating-decor.svg?url'

export function HeroFloatingDecor() {
  return (
    <div className="hero-floating" aria-hidden>
      <img
        className="hero-floating__sheet"
        src={heroFloatingDecor}
        alt=""
        width={642}
        height={255}
        decoding="async"
      />
    </div>
  )
}
