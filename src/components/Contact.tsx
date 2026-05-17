import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__info">
        <p className="contact__eyebrow">Get In Touch /</p>
        <h2 className="contact__title">
          Let's Collaborate<br />
          On Science
        </h2>

        <div className="contact__details">
          <div className="contact__detail">
            <div className="contact__detail-icon">✉️</div>
            <div>
              <div className="contact__detail-label">Email</div>
              <div className="contact__detail-value">Nalekhmimi@inaya.edu.sa</div>
            </div>
          </div>
          <div className="contact__detail">
            <div className="contact__detail-icon">📍</div>
            <div>
              <div className="contact__detail-label">Location</div>
              <div className="contact__detail-value">Riyadh, Saudi Arabia</div>
            </div>
          </div>
          <div className="contact__detail">
            <img src="/images/13.jpeg" alt="Inaya Medical Colleges" className="contact__detail-logo" />
            <div>
              <div className="contact__detail-label">Institution</div>
              <div className="contact__detail-value">Inaya Medical Colleges</div>
            </div>
          </div>
        </div>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <input type="text" placeholder="Subject / Research Inquiry" />
        <textarea placeholder="Your message…" required />
        {sent ? (
          <p style={{ color: '#4ECDC4', fontWeight: 600 }}>
            ✓ Message sent — Dr. Nuha will be in touch soon.
          </p>
        ) : (
          <button type="submit" className="contact__submit">
            Send Message →
          </button>
        )}
      </form>
    </section>
  )
}
