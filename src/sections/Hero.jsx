import { useEffect, useState } from 'react'
import './Hero.css'
import signature from '../assets/signature.png'
import CrowBackground from '../components/CrowBackground'

function Hero({ onEnterPortfolio, onCastCrow }) {
  const [casting, setCasting] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    if (unlocked) return

    window.scrollTo(0, 0)
    document.documentElement.classList.add('hero-locked')

    const blockScroll = (event) => {
      event.preventDefault()
    }

    const blockKeys = (event) => {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
      if (keys.includes(event.key)) event.preventDefault()
    }

    window.addEventListener('wheel', blockScroll, { passive: false })
    window.addEventListener('touchmove', blockScroll, { passive: false })
    window.addEventListener('keydown', blockKeys)

    return () => {
      document.documentElement.classList.remove('hero-locked')
      window.removeEventListener('wheel', blockScroll)
      window.removeEventListener('touchmove', blockScroll)
      window.removeEventListener('keydown', blockKeys)
    }
  }, [unlocked])

  const castCrowClone = () => {
    if (casting) return
    setCasting(true)
    onCastCrow?.()
    window.setTimeout(() => setCasting(false), 3200)
  }

  const handlePortfolioClick = () => {
    // Unlock + scroll only — no Itachi effect
    setUnlocked(true)
    document.documentElement.classList.remove('hero-locked')
    onEnterPortfolio?.()
    requestAnimationFrame(() => {
      document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <section id="hero" className="hero">
      <CrowBackground />
      <div className="hero-content">
        <button
          type="button"
          className={`hero-signature-btn${casting ? ' is-casting' : ''}`}
          onClick={castCrowClone}
          aria-label="Cast crow clone"
          title="Click for crow clone"
        >
          <img
            src={signature}
            alt="Laadj Zakaria"
            className="hero-signature"
            draggable={false}
          />
        </button>

        <p className="hero-subtitle">Software Engineer Student</p>
        <button className="hero-btn" onClick={handlePortfolioClick}>
          see portfolio
        </button>
      </div>
    </section>
  )
}

export default Hero
