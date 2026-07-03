import './AboutHero.css'
import keyboard from '../assets/keyboard.png'

function AboutHero() {
  return (
    <section id="about-me" className="about-hero">
      <div className="ah-main">
        <div className="ah-left">
          <h1 className="ah-name">LAADJ<br />ZAKARIA</h1>
          <p className="ah-role">Software Engineer Student</p>
          <p className="ah-desc">
            Designing and building full-stack applications. 
            Software Engineering student with high ambitions 
            and a sharp focus on quality, scalability, and 
            real-world impact.
          </p>
          <div className="ah-btns">
  <button 
    className="btn-dark"
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  >
    View projects
  </button>
  <button 
    className="btn-light"
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Get in Touch
  </button>
  
</div>
        </div>

        <div className="ah-right">
          <div className="ah-keyboard-wrap">
            <img src={keyboard} alt="keyboard" className="ah-keyboard" />
          </div>
        </div>
      </div>

      {/* Centré en bas */}
      <div className="ah-scroll">
        <span>Scroll to explore</span>
        <div className="ah-scroll-icon">&#8964;</div>
      </div>

    </section>
  )
}

export default AboutHero