import { useState } from 'react'

const pills = [
  {
    label: 'Biosensors',
    image: '/images/5.png',
    desc: 'Developing paper-based and electrochemical biosensors for rapid, low-cost detection of infectious diseases and critical biomarkers.',
  },
  {
    label: 'ALI / ARDS Research',
    image: '/images/6.jpeg',
    desc: 'Investigating the role of alveolar macrophages and CD4 in Acute Lung Injury to advance early diagnosis and targeted treatment.',
  },
  {
    label: 'Sepsis Detection',
    image: '/images/4.png',
    desc: 'Engineering MMP-9 biomarker sensing platforms for early, accurate sepsis identification — validated in murine models.',
  },
  {
    label: 'Molecular Biology',
    image: '/images/1.jpeg',
    desc: 'Applying in vivo imaging and multiplexing platforms to track disease progression at the molecular level.',
  },
  {
    label: 'Clinical Laboratory',
    image: '/images/7.png',
    desc: 'Over 15 years of clinical laboratory expertise spanning microbiology, cell biology, and translational research.',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  return (
    <section id="home" className="hero">
      <div className="hero__card">

        {/* Animated background image */}
        <div
          key={active}
          className="hero__card-bg"
          style={{ backgroundImage: `url('${pills[active].image}')` }}
        />
        {/* Gradient overlay */}
        <div className="hero__card-gradient" />

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
            <img src="/images/12.png" alt="Noor Biotech GmbH" className="hero__badge-logo" />
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

            {/* Brief description for active pill */}
            <p key={`desc-${active}`} className="hero__pill-desc">
              {pills[active].desc}
            </p>

            <div className="hero__pills">
              {pills.map((p, i) => (
                <button
                  key={p.label}
                  className={`hero__pill${active === i ? ' hero__pill--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {p.label}
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
                  src="/images/7.png"
                  alt="Dr. Nuha Alekhmimi"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
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
