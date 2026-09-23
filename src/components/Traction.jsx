import useReveal from '../hooks/useReveal'

const milestones = [
  {
    title: 'Founding team in place',
    body: 'Five co-founders covering business, product, and technology — all full-time on Gara.',
  },
  {
    title: 'Prototypes in active development',
    body: 'Gara Ride and Gara Bike are defined and their MVPs are built. Pre-launch, moving into user acquisition.',
  },
  {
    title: 'Ready for first clients',
    body: 'Our software services arm is open for business and building its first client relationships.',
  },
]

export default function Traction() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const noteRef = useReveal()

  return (
    <section className="traction light" id="traction">
      <div className="wrap">
        <div className="traction-head reveal" ref={headRef}>
          <div className="eyebrow">WHERE WE ARE TODAY</div>
          <h2>Early, and <em>building fast.</em></h2>
        </div>

        <div className="traction-grid reveal reveal-stagger" ref={gridRef}>
          {milestones.map((m, i) => (
            <div className="t-card" style={{ '--i': i }} key={m.title}>
              <span className="t-num mono">{String(i + 1).padStart(2, '0')}</span>
              <h4>{m.title}</h4>
              <p>{m.body}</p>
            </div>
          ))}
        </div>

        <p className="traction-note reveal" ref={noteRef}>
          We're early by design. This is exactly the stage where the right
          partner has the most impact.
        </p>
      </div>
    </section>
  )
}
