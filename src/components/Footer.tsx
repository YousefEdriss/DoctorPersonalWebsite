export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logo-icon">N</div>
        <span>Noor Biotech GmbH</span>
      </div>

      <p className="footer__copyright">
        © {year} Dr. Nuha Khalid Alekhmimi · All rights reserved
      </p>

      <nav className="footer__links">
        <a href="#home">Home</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  )
}
