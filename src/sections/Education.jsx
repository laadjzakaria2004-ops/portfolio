import './Education.css'

function Education() {
  return (
    <section id="education" className="edu-section">
      <h2 className="edu-title">Education</h2>

      <div className="edu-cards">

        {/* Licence */}
        <div className="edu-card">
          <p className="edu-year">2023 — 2026</p>
          <h3 className="edu-degree">Bachelor's Degree<br />in Computer Science</h3>
          <p className="edu-school">University of Bejaia</p>
          <p className="edu-field">Computer Science</p>
          <span className="edu-pill">Graduated</span>
        </div>

        {/* Master */}
        <div className="edu-card featured">
          <p className="edu-year light">2026 — Present</p>
          <h3 className="edu-degree light">Master's Degree<br />Software Engineering</h3>
          <p className="edu-school light">University of Bejaia</p>
          <p className="edu-field light">Software Engineering</p>
          <div className="edu-current">
            <div className="edu-dot-pulse"></div>
            <span>Currently enrolled · 1st year</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education