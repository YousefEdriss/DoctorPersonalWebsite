const items = [
  { number: '10', suffix: '', label: 'Publications' },
  { number: '4', suffix: '', label: 'Patents Filed' },
  { number: '15', suffix: '+', label: 'International Conferences' },
  { number: '1', suffix: 'st', label: 'Prize – Alfaisal 2020' },
]

export default function Stats() {
  return (
    <div className="stats">
      {items.map((item) => (
        <div key={item.label} className="stats__item">
          <div className="stats__number">
            {item.number}
            <span className="stats__accent">{item.suffix}</span>
          </div>
          <div className="stats__label">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
