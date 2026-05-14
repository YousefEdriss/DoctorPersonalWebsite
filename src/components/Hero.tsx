import { useState } from 'react'

const pills = [
  'Biosensors',
  'ALI / ARDS Research',
  'Sepsis Detection',
  'Molecular Biology',
  'Clinical Laboratory',
]

export default function Hero() {
  const [activepill, setActivePill] = useState(0)

  return (
    <section id="home" className="hero">
      <div className="hero__card">

        {/* Top row */}
        <div className="hero__top">
          <div className="hero__pagination">
            <span>← 01</span>
            <div className="hero__pagination-track">
              <div className="hero__pagination-fill" />
            </div>
            <span>05 →</span>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Founder — Noor Biotech GmbH
          </div>
        </div>

        {/* Main content */}
        <div className="hero__main">
          <div className="hero__left">
            <h1 className="hero__heading">
              Pioneering<br />
              Biomedical<br />
              Research<br />
              With Care.
            </h1>
            <div className="hero__pills">
              {pills.map((p, i) => (
                <button
                  key={p}
                  className={`hero__pill${activepill === i ? ' hero__pill--active' : ''}`}
                  onClick={() => setActivePill(i)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="hero__right">
            <p className="hero__description">
              Expert biomedical research for life-threatening
              conditions — delivered with precision, innovation,
              and unwavering scientific rigor.
            </p>
            <div className="hero__doctor-card">
              <div className="hero__doctor-avatar">
                <img
                  src="/images/portrait.jpg"
                  alt="Dr. Nuha Alekhmimi"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                N
              </div>
              <div className="hero__doctor-info">
                <h4>Dr. Nuha K. Alekhmimi</h4>
                <p>Cell Biology & Biosensors</p>
                <span className="hero__doctor-exp">PhD · 15+ yrs Experience</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
