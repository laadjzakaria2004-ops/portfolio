import { useCallback, useRef, useState } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import AboutHero from './sections/AboutHero'
import Technologies from './sections/Technologies'
import AboutMe from './sections/AboutMe'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import { CrowCast } from './components/CrowBackground'

function App() {
  const [portfolioEntered, setPortfolioEntered] = useState(false)
  const [castId, setCastId] = useState(0)
  const castingRef = useRef(false)

  const castCrowClone = useCallback(() => {
    if (castingRef.current) return
    castingRef.current = true
    setCastId((id) => id + 1)
    window.setTimeout(() => {
      castingRef.current = false
    }, 3200)
  }, [])

  return (
    <div className="app">
      <CrowCast castId={castId} />
      <Navbar unlocked={portfolioEntered} onCastCrow={castCrowClone} />
      <main>
        <Hero
          onEnterPortfolio={() => setPortfolioEntered(true)}
          onCastCrow={castCrowClone}
        />
        <AboutHero />
        <Technologies />
        <AboutMe />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
