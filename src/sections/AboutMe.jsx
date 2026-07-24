import './AboutMe.css'
import photo from '../assets/photo.jpg'

function AboutMe() {
  return (
    <section id="about-me-detail" className="aboutme-section">
      <h2 className="aboutme-title">About Me</h2>
      <div className="aboutme-inner">

        {/* GAUCHE — photo */}
        <div className="aboutme-left">
          <img src={photo} alt="Laadj Zakaria" className="aboutme-photo" />
        </div>

        {/* DROITE — texte + stats */}
        <div className="aboutme-right">
          <div className="aboutme-text">
            <p>Software Engineering student (Master 1) driven by a genuine passion for full-stack development and software architecture.</p>
            <p>I build complete web applications — handling both the frontend and backend — and I adapt quickly to new technologies and challenges.</p>
            <p>My projects during my studies gave me hands-on experience and a mindset focused on quality, scalability, and continuous improvement. I don't just learn — I build.</p>
            <p>Open to alternance, internship, or junior Software Engineer roles. Ready to bring motivation, dedication, and strong technical skills to the right team.</p>
          </div>

          <div className="aboutme-stats">
            <div className="stat-card">
              <span className="stat-num">+3</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">+6</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">1 year</span>
              <span className="stat-label">Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-num small">Always</span>
              <span className="stat-label">Learning</span>
            </div>
          </div>

          <a href="/cv .pdf" download="Laadj_Zakaria_CV .pdf">
          <button className="aboutme-btn">Download Resume</button>
            </a>
        </div>

      </div>
    </section>
  )
}

export default AboutMe