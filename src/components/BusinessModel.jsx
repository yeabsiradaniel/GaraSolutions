import useReveal from '../hooks/useReveal'

const streams = [
  {
    tag: 'Active now',
    title: 'Software Services',
    body: 'Project and retainer fees from the businesses we build for. Our near-term revenue engine.',
  },
  {
    tag: 'At pilot launch',
    title: 'Ride & Bike Usage',
    body: 'Commission on shared rides and distance-based fees on bike rentals, once pilots go live.',
  },
  {
    tag: 'As we scale',
    title: 'Platform Fees',
    body: 'Small trust and transaction fees as we expand into new sharing verticals across Africa.',
  },
]

export default function BusinessModel() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="model" id="model">
      <div className="wrap">
        <div className="model-head reveal" ref={headRef}>
          <div className="eyebrow">BUSINESS MODEL</div>
          <h2>How we make money.</h2>
          <p>
            Revenue today from software services, revenue tomorrow from the
            platforms that revenue builds.
          </p>
        </div>

        <div className="model-grid reveal reveal-stagger" ref={gridRef}>
          {streams.map((s, i) => (
            <div className="m-card" style={{ '--i': i }} key={s.title}>
              <div className="tag mono">{s.tag}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
