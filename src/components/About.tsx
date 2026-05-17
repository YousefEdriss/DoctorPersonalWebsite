import { useState, useEffect, useCallback } from 'react'

const carouselImages = [
  { src: '/images/1.jpeg', alt: 'Dr. Nuha Alekhmimi in the laboratory' },
  { src: '/images/2.jpeg', alt: 'Dr. Nuha presenting at international conference' },
  { src: '/images/4.png',  alt: 'PhD graduation — Friedrich Schiller University Jena 2024' },
  { src: '/images/5.png',  alt: 'Dr. Nuha working in research laboratory' },
  { src: '/images/7.png',  alt: 'Dr. Nuha Alekhmimi portrait' },
  { src: '/images/8.jpeg', alt: 'Dr. Nuha Alekhmimi' },
  { src: '/images/9.jpeg', alt: 'Dr. Nuha Alekhmimi' },
]

const positions = [
  {
    logo: '/images/13.jpeg',
    alt: 'Inaya Medical Colleges',
    title: 'Assistant Professor — Cell Biology & Clinical Laboratory Sciences',
    org: 'Inaya Medical Colleges, Riyadh, KSA (2021 – Present)',
  },
  {
    logo: '/images/14.webp',
    alt: 'Al-Arfaj Medical Services',
    title: 'Part-Time Consultant & Business Developer',
    org: 'Alarfaj Medical Services Co., Riyadh (2021 – Present)',
  },
]

export default function About() {
  const [current, setCurrent] = useState(0)
  const [resetKey, setResetKey] = useState(0)

  const advance = useCallback(() => {
    setCurrent(prev => (prev + 1) % carouselImages.length)
  }, [])

  // Auto-advance every 10 s; restarts whenever resetKey changes (manual nav)
  useEffect(() => {
    const timer = setInterval(advance, 10000)
    return () => clearInterval(timer)
  }, [advance, resetKey])

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % carouselImages.length)
    setResetKey(k => k + 1)
  }

  return (
    <section id="about" className="about">

      {/* ── Carousel ── */}
      <div className="about__photo">
        {/* Fallback background */}
        <div className="about__photo-placeholder">🔬</div>

        {/* All images stacked; only active one is visible */}
        {carouselImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`about__carousel-img${i === current ? ' about__carousel-img--active' : ''}`}
          />
        ))}

        {/* Dots + forward button */}
        <div className="about__carousel-controls">
          <div className="about__carousel-dots">
            {carouselImages.map((_, i) => (
              <span
                key={i}
                className={`about__carousel-dot${i === current ? ' about__carousel-dot--active' : ''}`}
                onClick={() => { setCurrent(i); setResetKey(k => k + 1) }}
              />
            ))}
          </div>
          <button className="about__carousel-btn" onClick={handleNext}>›</button>
        </div>
      </div>

      {/* ── Text content ── */}
      <div className="about__content">
        <p className="about__eyebrow">About Dr. Nuha /</p>
        <h2 className="about__title">
          Excellence In<br />
          Science With<br />
          Compassionate<br />
          Innovation
        </h2>

        <p className="about__text">
          Dr. Nuha Alekhmimi completed her PhD at FSU Jena University, Germany. She is an
          assistant professor in the Clinical and Laboratory Sciences Department, Inaya Medical
          College, Riyadh, KSA, and <strong>Founder of Noor Biotech GmbH</strong>.
          She has over 4 Patents in national and international PCT offices and 9 publications.
          Throughout her career, she has served as an academic and cell biologist researcher
          in the fields of medical and biotechnology research, providing leadership in the
          scientific community.
        </p>

        {/* ── Noor Biotech founder card ── */}
        <div className="about__founder-card">
          <img src="/images/12.png" alt="Noor Biotech GmbH" className="about__founder-logo" />
          <div className="about__founder-info">
            <div className="about__founder-role">Founder & CEO</div>
            <div className="about__founder-company">Noor Biotech GmbH</div>
            </div>
        </div>

        <a href="#publications" className="about__read-more">
          View Publications →
        </a>

        <div className="about__positions">
          {positions.map((pos) => (
            <div key={pos.title} className="about__position">
              <img src={pos.logo} alt={pos.alt} className="about__position-logo" />
              <div>
                <div className="about__position-title">{pos.title}</div>
                <div className="about__position-org">{pos.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
