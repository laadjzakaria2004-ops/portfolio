import './Hero.css'
import signature from '../assets/signature.png'

function Hero() {
  const handleClick = () => {
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img 
          src={signature} 
          alt="Laadj Zakaria" 
          className="hero-signature"
        />
       
        <p className="hero-subtitle">Software Engineer Student</p>
        <button className="hero-btn" onClick={handleClick}>
          see portfolio
        </button>
      </div>
    </section>
  )
}

export default Hero