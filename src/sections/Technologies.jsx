import './Technologies.css'
import { technologies } from '../data/technologies'

function Technologies() {
  return (
    <section id="technologies" className="tech-section">
      <h2 className="tech-title">Technologies</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies