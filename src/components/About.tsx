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
  return (
    <section id="about" className="about">
      <div className="about__photo">
        <img src="/images/1.jpeg" alt="Dr. Nuha Alekhmimi in the laboratory" />
        <div className="about__photo-placeholder">🔬</div>
      </div>

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
