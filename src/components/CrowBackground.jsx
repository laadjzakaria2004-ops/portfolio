import frameUp from '../assets/crows/frame-up.png'
import frameGlide from '../assets/crows/frame-glide.png'
import frameDown from '../assets/crows/frame-down.png'
import './CrowBackground.css'

const FRAMES = { up: frameUp, glide: frameGlide, down: frameDown }

function buildBurst(count, layer) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360 + (i % 3) * 11
    const dist = layer === 'near' ? 52 + (i % 5) * 10 : 40 + (i % 7) * 8
    const rad = (angle * Math.PI) / 180
    return {
      id: `burst-${layer}-${i}`,
      layer,
      size: layer === 'near' ? 95 + (i % 4) * 28 : layer === 'mid' ? 50 + (i % 5) * 12 : 24 + (i % 4) * 6,
      duration: layer === 'near' ? 2.6 + (i % 5) * 0.2 : layer === 'mid' ? 3.1 + (i % 6) * 0.2 : 3.6 + (i % 5) * 0.25,
      delay: (i % 8) * 0.04,
      flap: `${0.4 + (i % 5) * 0.05}s`,
      opacity: layer === 'near' ? 0.95 : layer === 'mid' ? 0.7 : 0.3,
      tx: Math.cos(rad) * dist,
      ty: Math.sin(rad) * dist,
      rot: `${angle + 90}deg`,
      spin: i % 2 === 0 ? 1 : -1,
    }
  })
}

function buildOrbit(count, radius, layer) {
  return Array.from({ length: count }, (_, i) => {
    const start = (i / count) * 360
    return {
      id: `orbit-${layer}-${i}`,
      layer,
      size: layer === 'mid' ? 40 + (i % 4) * 8 : 24 + (i % 3) * 5,
      duration: 16 + (i % 5) * 2.5,
      delay: -(i / count) * (16 + (i % 5) * 2.5),
      flap: `${0.6 + (i % 4) * 0.08}s`,
      opacity: layer === 'mid' ? 0.45 : 0.22,
      radius: `${radius}px`,
      start: `${start}deg`,
      spin: i % 2 === 0 ? 1 : -1,
    }
  })
}

function buildSweep(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: `sweep-${i}`,
    layer: i % 4 === 0 ? 'near' : 'mid',
    size: i % 4 === 0 ? 100 + (i % 3) * 16 : 44 + (i % 4) * 12,
    duration: 12 + (i % 6) * 1.4,
    delay: -i * 1.2,
    flap: `${0.55 + (i % 4) * 0.07}s`,
    opacity: i % 4 === 0 ? 0.55 : 0.32,
    top: `${10 + ((i * 19) % 70)}%`,
    dir: i % 2 === 0 ? 1 : -1,
    path: i % 3,
  }))
}

function buildFeathers(count) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360 + i * 7
    const rad = (angle * Math.PI) / 180
    const dist = 32 + (i % 6) * 8
    return {
      id: `feather-${i}`,
      delay: 0.08 + (i % 10) * 0.04,
      duration: 2.4 + (i % 5) * 0.25,
      tx: `${Math.cos(rad) * dist}vw`,
      ty: `${Math.sin(rad) * dist}vh`,
      size: 4 + (i % 4) * 2,
      rot: `${angle}deg`,
    }
  })
}

const BURST = [
  ...buildBurst(14, 'far'),
  ...buildBurst(18, 'mid'),
  ...buildBurst(12, 'near'),
]

const ORBIT = [
  ...buildOrbit(7, 200, 'far'),
  ...buildOrbit(9, 270, 'mid'),
]

const SWEEP = buildSweep(8)
const FEATHERS = buildFeathers(24)

function CrowSprite({ flap }) {
  return (
    <div className="crow-sprite" style={{ '--flap': flap }}>
      <img src={FRAMES.up} alt="" className="crow-frame crow-frame--up" draggable={false} />
      <img src={FRAMES.glide} alt="" className="crow-frame crow-frame--glide" draggable={false} />
      <img src={FRAMES.down} alt="" className="crow-frame crow-frame--down" draggable={false} />
    </div>
  )
}

function BurstCrow({ crow }) {
  return (
    <div
      className={`itachi-crow itachi-crow--${crow.layer} itachi-burst`}
      style={{
        '--size': `${crow.size}px`,
        '--duration': `${crow.duration}s`,
        '--delay': `${crow.delay}s`,
        '--opacity': crow.opacity,
        '--tx': crow.tx,
        '--ty': crow.ty,
        '--rot': crow.rot,
        '--spin': crow.spin,
      }}
    >
      <CrowSprite flap={crow.flap} />
    </div>
  )
}

function OrbitCrow({ crow }) {
  return (
    <div
      className={`itachi-orbit itachi-orbit--${crow.spin > 0 ? 'cw' : 'ccw'}`}
      style={{
        '--duration': `${crow.duration}s`,
        '--delay': `${crow.delay}s`,
        '--radius': crow.radius,
        '--start': crow.start,
      }}
    >
      <div
        className={`itachi-crow itachi-crow--${crow.layer} itachi-orbit-bird`}
        style={{
          '--size': `${crow.size}px`,
          '--opacity': crow.opacity,
        }}
      >
        <CrowSprite flap={crow.flap} />
      </div>
    </div>
  )
}

function SweepCrow({ crow }) {
  return (
    <div
      className={`itachi-crow itachi-crow--${crow.layer} itachi-sweep itachi-sweep--${crow.path} ${crow.dir < 0 ? 'itachi-sweep--flip' : ''}`}
      style={{
        top: crow.top,
        '--size': `${crow.size}px`,
        '--duration': `${crow.duration}s`,
        '--delay': `${crow.delay}s`,
        '--opacity': crow.opacity,
      }}
    >
      <CrowSprite flap={crow.flap} />
    </div>
  )
}

function CrowCast({ castId }) {
  if (!castId) return null

  return (
    <div key={castId} className="itachi-cast is-active" aria-hidden="true">
      <div className="itachi-stage itachi-stage--cast itachi-stage--cast-back">
        <div className="itachi-origin">
          {BURST.filter((c) => c.layer !== 'near').map((c) => (
            <BurstCrow key={c.id} crow={c} />
          ))}
          {FEATHERS.map((f) => (
            <span
              key={f.id}
              className="itachi-feather"
              style={{
                '--delay': `${f.delay}s`,
                '--duration': `${f.duration}s`,
                '--tx': f.tx,
                '--ty': f.ty,
                '--size': `${f.size}px`,
                '--rot': f.rot,
              }}
            />
          ))}
        </div>
      </div>

      <div className="itachi-stage itachi-stage--cast itachi-stage--cast-front">
        <div className="itachi-origin">
          {BURST.filter((c) => c.layer === 'near').map((c) => (
            <BurstCrow key={c.id} crow={c} />
          ))}
        </div>
      </div>

      <div className="itachi-atmosphere itachi-atmosphere--cast">
        <div className="itachi-flash" />
      </div>
    </div>
  )
}

function CrowBackground() {
  return (
    <>
      <div className="itachi-stage itachi-stage--back" aria-hidden="true">
        <div className="itachi-mist" />
        <div className="itachi-origin">
          {ORBIT.map((c) => (
            <OrbitCrow key={c.id} crow={c} />
          ))}
        </div>
        {SWEEP.filter((c) => c.layer !== 'near').map((c) => (
          <SweepCrow key={c.id} crow={c} />
        ))}
      </div>

      <div className="itachi-stage itachi-stage--front" aria-hidden="true">
        {SWEEP.filter((c) => c.layer === 'near').map((c) => (
          <SweepCrow key={c.id} crow={c} />
        ))}
      </div>

      <div className="itachi-atmosphere" aria-hidden="true">
        <div className="itachi-vignette" />
        <div className="itachi-grain" />
      </div>
    </>
  )
}

export { CrowCast }
export default CrowBackground
