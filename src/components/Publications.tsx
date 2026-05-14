const publications = [
  {
    title: 'Based biosensor for the detection of sepsis using MMP-9 biomarker in FIP mice model',
    journal: 'Biosensors',
    year: '2023',
    vol: 'Vol. 13, No. 8, p. 804',
  },
  {
    title: 'Biosensing Platform for the Detection of Biomarkers for ALI/ARDS in Bronchoalveolar Lavage Fluid of LPS Mice Model',
    journal: 'Biosensors',
    year: '2023',
    vol: 'Vol. 13, No. 7, p. 676',
  },
  {
    title: 'MMP2 probe based on in vivo imaging technique for tracking ALI/ARDS in mice',
    journal: 'Journal of Biomedical Research',
    year: '2021',
    vol: '',
  },
  {
    title: 'Pulmonary Neutrophil Recruitment in Response to Inhaled LPS is Impaired in CD4 Deficient Mice',
    journal: 'Immunology & Pulmonology Research',
    year: '2022',
    vol: '',
  },
  {
    title: 'The impact of flipped classroom on student learning: A comparative study',
    journal: 'Medical Education Journal',
    year: '2022',
    vol: '',
  },
  {
    title: 'Fabricating of multiplexing sensing platform for the detection of ALI/ARDS in LPS mice model',
    journal: 'American Chemical Society SciMeetings',
    year: '2022',
    vol: 'Vol. 3, No. 2',
  },
  {
    title: 'Role of Alveolar Macrophage and CD4 in ALI/ARDS in Mice',
    journal: 'PhD Dissertation — Alfaisal University, Saudi Arabia',
    year: '2022',
    vol: '',
  },
  {
    title: 'Based biosensor for the detection of sepsis murine using MMP9 and a9β6, integrons RI Class1 and R2 Class 2 peptides',
    journal: 'Biosensors & Bioelectronics',
    year: '2021',
    vol: '',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="publications__header">
        <div>
          <p className="section__eyebrow">Research Output /</p>
          <h2 className="section__title">
            Peer-Reviewed<br />
            Publications
          </h2>
        </div>
      </div>

      <div className="publications__list">
        {publications.map((pub, i) => (
          <div key={i} className="publication__item">
            <span className="publication__number">{String(i + 1).padStart(2, '0')}</span>
            <div className="publication__content">
              <h4>{pub.title}</h4>
              <div className="publication__journal">
                {pub.journal}{pub.vol ? `, ${pub.vol}` : ''}
              </div>
              <div className="publication__year">{pub.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
