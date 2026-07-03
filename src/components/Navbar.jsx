import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About Me',   id: 'about-me' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
]

function Navbar() {
  const [active, setActive]   = useState('about-me')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Cacher navbar sur Hero
    const hero = document.getElementById('hero')
    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (hero) heroObserver.observe(hero)

    // Détecter section active
    const observers = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    // Technologies = sous-section de About Me
    // la ligne reste sur About Me quand on scroll dans Technologies
    const techEl = document.getElementById('technologies')
    if (techEl) {
      const techObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive('about-me') },
        { threshold: 0.4 }
      )
      techObserver.observe(techEl)
      observers.push(techObserver)
    }

    return () => {
      heroObserver.disconnect()
      observers.forEach(o => o.disconnect())
    }
  }, [])

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-inner">
        {links.map(({ label, id }) => (
          <button
            key={id}
            className={`nav-link ${active === id ? 'active' : ''}`}
            onClick={() => handleClick(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar