import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <a href="#home" className="navbar__logo" onClick={close}>
        <img src="/images/10.png" alt="Noor Biotech GmbH Logo" className="navbar__logo-img" />
      </a>

      <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
        <li><a href="#home"          onClick={close}>Home</a></li>
        <li><a href="#research"      onClick={close}>Research</a></li>
        <li><a href="#about"         onClick={close}>About</a></li>
        <li><a href="#publications"  onClick={close}>Publications</a></li>
        <li><a href="#patents"       onClick={close}>Patents</a></li>
        <li><a href="#contact"       onClick={close}>Contact</a></li>
      </ul>

      <button
        className="navbar__hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>
    </nav>
  )
}
