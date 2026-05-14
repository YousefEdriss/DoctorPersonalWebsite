const areas = [
  {
    title: 'Biosensors',
    desc: 'Paper-based & electrochemical biosensors for rapid disease detection',
    icon: '🔬',
    bg: '/images/research-biosensor.jpg',
    gradient: 'linear-gradient(135deg,#1B6FB5,#0D3B66)',
  },
  {
    title: 'ALI / ARDS Research',
    desc: 'Alveolar macrophage & CD4 roles in Acute Lung Injury diagnostics',
    icon: '🫁',
    bg: '/images/research-ards.jpg',
    gradient: 'linear-gradient(135deg,#006994,#00A8CC)',
  },
  {
    title: 'Sepsis Detection',
    desc: 'MMP-9 biomarker platforms for early sepsis identification in vivo',
    icon: '🧬',
    bg: '/images/research-sepsis.jpg',
    gradient: 'linear-gradient(135deg,#0D3B66,#1B6FB5)',
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
            <div className="research__review-avatars">
              {['N', 'J', 'M'].map((l) => (
                <div key={l} className="research__review-avatar">{l}</div>
              ))}
            </div>
            <div>
              <div className="research__review-count">9+</div>
              <div className="research__review-label">Publications</div>
            </div>
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
            <button className="research__card-nav research__card-nav--left">‹</button>
            <button className="research__card-nav research__card-nav--right">›</button>
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
