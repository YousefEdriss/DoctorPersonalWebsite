type Patent = {
  icon: string
  num: string
  title: string
  jurisdictions: string[]
  video?: string
}

const patents: Patent[] = [
  {
    icon: '🫁',
    num: 'Patent 01',
    title: 'Colorimetric Detection System for Rapid Detection of Infectious Pulmonary Diseases',
    jurisdictions: ['US', 'Europe', 'China', 'KSA'],
  },
  {
    icon: '🧪',
    num: 'Patent 02',
    title: 'An Automated System for Microbial Testing',
    jurisdictions: ['US', 'Europe'],
    video: '/images/16.mp4',
  },
  {
    icon: '🔬',
    num: 'Patent 03',
    title: 'Device for the Cultivation of Samples, Incubation and a Microbial Growth Detector',
    jurisdictions: ['KSA'],
  },
  {
    icon: '🩸',
    num: 'Patent 04',
    title: 'Smart Blood Bank',
    jurisdictions: ['US', 'Europe', 'KSA'],
  },
]

export default function Patents() {
  return (
    <section id="patents" className="patents">
      <p className="section__eyebrow">Intellectual Property /</p>
      <h2 className="section__title">Filed Patents</h2>

      <div className="patents__grid">
        {patents.map((patent) => (
          <div key={patent.num} className="patent__card">
            <div className="patent__icon">{patent.icon}</div>
            <div className="patent__num">{patent.num}</div>
            <h3 className="patent__title">{patent.title}</h3>
            <div className="patent__jurisdictions">
              {patent.jurisdictions.map((j) => (
                <span key={j} className="patent__jurisdiction-tag">{j}</span>
              ))}
            </div>
            {patent.video && (
              <video
                className="patent__video"
                controls
                preload="none"
                playsInline
              >
                <source src={patent.video} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
