export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar__logo">
        <div className="navbar__logo-icon">N</div>
        <span>Noor Biotech <span className="navbar__logo-sub">GmbH</span></span>
      </a>

      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#patents">Patents</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="navbar__cta">
        Book Consultation
        <span className="navbar__cta-arrow">→</span>
      </a>
    </nav>
  )
}
