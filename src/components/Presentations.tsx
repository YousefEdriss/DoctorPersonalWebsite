const presentations = [
  {
    year: '2024',
    month: 'Aug',
    title: 'An innovative EIS-free redox MMP-2 and MMP-9 based sensing platform for detecting ALI/ARDS and Sepsis',
    venue: '1st International Conference on AI Sensors & 10th International Symposium on Sensor Science — Singapore',
    award: 'Best Presenter Award',
  },
  {
    year: '2023',
    month: 'Oct',
    title: 'Biosensing Platform for the Detection of Biomarkers for ALI/ARDS in Bronchoalveolar Lavage Fluid',
    venue: 'Global Public Health and Healthcare Management — UK',
    award: '',
  },
  {
    year: '2023',
    month: 'Mar',
    title: 'Introducing to Endnote — 2nd Annual Research Conference',
    venue: 'Inaya Medical Colleges — Riyadh, KSA',
    award: '',
  },
  {
    year: '2022',
    month: 'Aug',
    title: 'Fabricating of multiplexing sensing platform for the detection of ALI/ARDS in LPS mice model',
    venue: 'American Chemistry Society — Chicago, USA',
    award: '',
  },
  {
    year: '2022',
    month: 'Jun',
    title: 'Nuha Smart Dish for Bacterial Detection',
    venue: '3rd Gulf Virtual Conference on Innovation, AI & Technology — Kuwait',
    award: '',
  },
  {
    year: '2021',
    month: 'Feb',
    title: 'Rapid paper-based assay for Salmonella detection',
    venue: 'MENA International Conference on Biosensors — Alfaisal University',
    award: '',
  },
  {
    year: '2019',
    month: 'Oct',
    title: 'Role of alveolar macrophages and CD4 in ALI/ARDS in mice',
    venue: 'European Respiratory Society International Congress — Madrid, Spain',
    award: '',
  },
  {
    year: '2018',
    month: 'Dec',
    title: 'Mask-Lung Infection Detection',
    venue: "MIT's Hacking Medicine Institute — Riyadh, KSA",
    award: '',
  },
  {
    year: '2018',
    month: 'Feb',
    title: 'Development of paper-based sensing platform for detection of ALI/ARDS',
    venue: 'Alfaisal University — Riyadh, KSA',
    award: '',
  },
  {
    year: '2015',
    month: 'Aug',
    title: 'Role of CD4 Alveolar macrophages in ALI/ARDS',
    venue: 'Alfaisal University — Riyadh, KSA',
    award: '',
  },
]

export default function Presentations() {
  return (
    <section id="presentations" className="presentations">

      {/* Full-width banner with 6.png background */}
      <div
        className="presentations__banner"
        style={{ backgroundImage: `url('/images/6.png')` }}
      >
        <div className="presentations__banner-content">
          <div className="presentations__banner-left">
            <p className="section__eyebrow">Global Reach /</p>
            <h2 className="section__title">
              Presentations &amp;<br />Conferences
            </h2>
            <p className="presentations__banner-caption">
              15+ international conferences across 5 continents
            </p>
          </div>

          {/* Singapore conference photo — Best Presenter */}
          <div>
            <div className="presentations__banner-photo">
              <img src="/images/2.jpeg" alt="Dr. Nuha presenting at international conference" />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', fontWeight: 600, textAlign: 'center', marginTop: '48px', letterSpacing: '0.5px' }}>
              🏆 Best Presenter — Singapore 2024
            </p>
          </div>
        </div>
      </div>

      <div className="presentations__body">
        <div className="presentations__grid">
          {presentations.map((p, i) => (
            <div
              key={i}
              className={`presentation__item${p.award ? ' presentation__item--award' : ''}`}
            >
              <div className="presentation__date">
                <div className="presentation__date-year">{p.year}</div>
                <div className="presentation__date-month">{p.month}</div>
              </div>
              <div className="presentation__content">
                <h4>{p.title}</h4>
                <div className="presentation__venue">{p.venue}</div>
                {p.award && (
                  <div className="presentation__award">🏆 {p.award}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
