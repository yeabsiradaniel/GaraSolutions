import useReveal from '../hooks/useReveal'

const stats = [
  {
    num: '$27.5B',
    lbl: 'Middle East & Africa sharing-economy market in 2025, growing roughly 31% a year through 2035.',
  },
  {
    num: '$12B+',
    lbl: "Projected size of Africa's ride-sharing market alone by 2030.",
  },
  {
    num: '6.18%',
    lbl: "Projected annual growth of East Africa's ride-sharing market through 2031.",
  },
  {
    num: '85.4M+',
    lbl: 'Mobile connections in Ethiopia, equal to 63.8% of the population in early 2025 — a growing digital layer for app-based mobility and cashless services.',
  },
  {
    num: '6.3M+',
    lbl: 'Addis Ababa metro population. A rapidly growing urban market with concentrated daily commuting demand.',
  },
]

export default function Market() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="market light" id="market">
      <div className="wrap">
        <div className="market-head reveal" ref={headRef}>
          <div className="eyebrow">MARKET OPPORTUNITY</div>
          <h2>Why <em>now.</em></h2>
        </div>

        <div className="stat-grid reveal reveal-stagger" ref={gridRef}>
          {stats.map((s, i) => (
            <div className="stat" style={{ '--i': i }} key={s.num}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        <p className="market-source">
          Sources: Global Growth Insights, Sharing Economy Market Report (2026) ·
          industry sharing-economy statistics compendium (2026) · OMDIA African
          smartphone shipment data (2026).
        </p>
      </div>
    </section>
  )
}
