import useReveal from '../hooks/useReveal'

const products = [
  {
    key: 'ride',
    status: 'MVP · Pilot testing',
    title: 'Gara Ride',
    desc: 'A carpooling platform connecting people traveling in similar directions, for more affordable commuting and fewer single-occupancy trips.',
    steps: ['Discover a suitable ride', 'Connect riders and drivers', 'Share the journey, split the cost'],
  },
  {
    key: 'bike',
    status: 'In development',
    title: 'Gara Bike',
    desc: 'A distance-based electric-bike rental service for flexible last-mile trips and cleaner urban mobility.',
    steps: ['Access a nearby EV bike', 'Ride for the distance you need', 'Pay based on usage, return via app'],
  },
]

export default function Products() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="products light" id="products">
      <div className="wrap">
        <div className="products-head reveal" ref={headRef}>
          <div className="eyebrow">OUR PRODUCTS</div>
          <h2>Built for sharing, <em>starting with mobility.</em></h2>
          <p>Gara Ride and Gara Bike are the beginning of a system built on trust, not ownership.</p>
        </div>

        <div className="product-grid reveal reveal-stagger" ref={gridRef}>
          {products.map((p, i) => (
            <div className={`product ${p.key}`} style={{ '--i': i }} key={p.key}>
              <div className="product-glow"></div>
              <span className="status mono">{p.status}</span>
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <ul>
                {p.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
