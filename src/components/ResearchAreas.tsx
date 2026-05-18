const areas = [
  {
    title: 'Biosensors',
    desc: 'Paper-based & electrochemical biosensors for rapid disease detection',
    icon: '🔬',
    bg: '/images/5.png',
    gradient: 'linear-gradient(135deg,rgba(27,111,181,0.75),rgba(13,59,102,0.80))',
  },
  {
    title: 'ALI / ARDS Research',
    desc: 'Alveolar macrophage & CD4 roles in Acute Lung Injury diagnostics',
    icon: '🫁',
    bg: '/images/6.jpeg',
    gradient: 'linear-gradient(135deg,rgba(0,105,148,0.72),rgba(0,168,204,0.65))',
  },
  {
    title: 'Sepsis Detection',
    desc: 'MMP-9 biomarker platforms for early sepsis identification in vivo',
    icon: '🧬',
    bg: '/images/2.jpeg',
    gradient: 'linear-gradient(135deg,rgba(13,59,102,0.78),rgba(27,111,181,0.70))',
  },
]

export default function ResearchAreas() {
  return (
    <section id="research" className="research">
      <div className="research__header">
        <div className="research__header-left">
          <p className="section__eyebrow">Our Research /</p>
          <h2 className="section__title">
            Discover Our<br />
            Signature Research<br />
            Areas
          </h2>
        </div>
        <div className="research__header-right">
          <p>
            Groundbreaking biomedical research delivered with
            precision and attention to molecular detail. From rapid
            biosensing platforms to in&nbsp;vivo imaging — advancing
            diagnostics for life-threatening diseases.
          </p>
          <div className="research__reviews">
            <a href="#publications" className="research__review-link">
              <div className="research__review-count">10</div>
              <div className="research__review-label">Publications</div>
            </a>
          </div>
        </div>
      </div>

      <div className="research__cards">
        {areas.map((area) => (
          <div key={area.title} className="research__card">
            <div
              className="research__card-bg"
              style={{ backgroundImage: `${area.gradient}, url('${area.bg}')` }}
            />
            <div className="research__card-overlay" />
            <div className="research__card-label">
              <div className="research__card-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
