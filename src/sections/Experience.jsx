import './Experience.css'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="exp-section">
      <h2 className="exp-title">Experience</h2>

      <div className="exp-layout">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`exp-row ${index % 2 === 0 ? 'left' : 'right'}`}>

            {/* Carte gauche */}
            <div className="exp-card-slot">
              {index % 2 === 0 && (
                <div className="exp-card">
                  <h3 className="exp-card-title">{exp.title}</h3>
                  <p className="exp-card-meta">{exp.company} · {exp.date}</p>
                  <p className="exp-card-desc">{exp.description}</p>
                  <div className="exp-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Timeline centrale */}
            <div className="exp-timeline-col">
              <div className="exp-dot"></div>
            </div>

            {/* Carte droite */}
            <div className="exp-card-slot">
              {index % 2 !== 0 && (
                <div className="exp-card">
                  <h3 className="exp-card-title">{exp.title}</h3>
                  <p className="exp-card-meta">{exp.company} · {exp.date}</p>
                  <p className="exp-card-desc">{exp.description}</p>
                  <div className="exp-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Experience