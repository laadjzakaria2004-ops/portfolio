import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-name">Laadj Zakaria</span>
        <span className="footer-role">Software Engineer Student</span>
      </div>
      <div className="footer-center">
        <span>© 2025 Laadj Zakaria. All rights reserved.</span>
      </div>
      <div className="footer-right">
        <button className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </button>
      </div>
    </footer>
  )
}

export default Footer