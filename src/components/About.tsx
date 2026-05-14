import { useState, useEffect, useCallback } from 'react'

const carouselImages = [
  { src: '/images/1.jpeg', alt: 'Dr. Nuha Alekhmimi in the laboratory' },
  { src: '/images/2.jpeg', alt: 'Dr. Nuha presenting at international conference' },
  { src: '/images/4.png',  alt: 'PhD graduation — Friedrich Schiller University Jena 2024' },
  { src: '/images/5.png',  alt: 'Dr. Nuha working in research laboratory' },
  { src: '/images/7.png',  alt: 'Dr. Nuha Alekhmimi portrait' },
]

const positions = [
  {
    icon: '🏢',
    title: 'Founder & CEO',
    org: 'Noor Biotech GmbH',
  },
  {
    icon: '🎓',
    title: 'Assistant Professor — Cell Biology & Clinical Laboratory Sciences',
    org: 'Inaya Medical Colleges, Riyadh, KSA (2021 – Present)',
  },
  {
    icon: '💼',
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
          Dr. Nuha Khalid Alekhmimi is a distinguished biomedical researcher and the
          <strong> Founder of Noor Biotech GmbH</strong>. Holding a PhD from Friedrich
          Schiller University Jena, Germany (2024), she has spent over 15 years advancing
          biosensing technologies for critical diseases including ALI/ARDS and Sepsis.
        </p>
        <p className="about__text">
          Her pioneering work spans paper-based assays, multiplexing sensing platforms,
          and in&nbsp;vivo MMP imaging techniques. Awarded <em>Best Presenter</em> at the
          1st International Conference on AI Sensors in Singapore (2024), Dr. Nuha brings
          world-class expertise to every scientific endeavour.
        </p>
        <p className="about__text">
          With 9+ publications, 4 international patents, and presentations across 5
          continents, she continues to bridge the gap between cutting-edge research and
          clinical application.
        </p>

        <a href="#publications" className="about__read-more">
          View Publications →
        </a>

        <div className="about__positions">
          {positions.map((pos) => (
            <div key={pos.title} className="about__position">
              <span className="about__position-icon">{pos.icon}</span>
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
