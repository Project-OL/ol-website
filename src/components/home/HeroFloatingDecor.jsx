import heroFloatingDecor from '../../assets/images/hero-floating-decor.svg?url'
import './HeroFloatingDecor.css'

const SHEET_LEFT = 416
const SHEET_TOP = 144

/** Icon-only crops — positions preserve Figma layout relative to hero (1440×1024) */
const FLOATING_DECOR_ITEMS = [
  { id: 'like', cropW: 72, cropH: 72, offsetX: 0, offsetY: 0 },
  { id: 'heart', cropW: 88, cropH: 88, offsetX: 578, offsetY: 104 },
  { id: 'star', cropW: 68, cropH: 68, offsetX: 516, offsetY: 172 },
]

export function HeroFloatingDecor() {
  return (
    <div className="hero-floating" aria-hidden>
      <img
        className="hero-floating__sheet"
        src={heroFloatingDecor}
        alt=""
        width={692}
        height={255}
        decoding="async"
      />
      <div className="hero-floating__spread">
        {FLOATING_DECOR_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`hero-floating__crop hero-floating__crop--${item.id}`}
            style={{
              '--crop-w': item.cropW,
              '--crop-h': item.cropH,
              '--offset-x': item.offsetX,
              '--offset-y': item.offsetY,
              '--hero-item-left': SHEET_LEFT + item.offsetX,
              '--hero-item-top': SHEET_TOP + item.offsetY,
            }}
          >
            <img
              className="hero-floating__crop-img"
              src={heroFloatingDecor}
              alt=""
              width={692}
              height={255}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
