import useReveal from '../hooks/useReveal'

const engines = [
  {
    tag: 'Active now',
    title: 'Software & Tech Solutions',
    body: 'Custom software, digital products, and technology consulting delivered as a service to businesses across Africa; our near-term engine for revenue and technical capability.',
    variant: '',
  },
  {
    tag: 'The mission',
    title: 'Sharing Economy Platforms',
    body: "Our own products, starting with mobility, that let people share what they have and access what they need; built on the capability our software arm creates.",
    variant: 'gold',
  },
]

export default function Overview() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="overview light" id="overview">
      <div className="wrap">
        <div className="overview-head reveal" ref={headRef}>
          <div className="eyebrow">OVERVIEW</div>
          <h2>One company, <em>two engines.</em></h2>
          <p>
            Software services generate revenue and sharpen our technical
            capability now. That capability and revenue directly fund and
            build toward the sharing-economy products that are Gara's
            long-term mission.
          </p>
        </div>

        <div className="engine-grid reveal reveal-stagger" ref={gridRef}>
          {engines.map((e, i) => (
            <div className={`engine ${e.variant} text-center`} style={{ '--i': i }} key={e.title}>
              <div className="tag mono">{e.tag}</div>
              <h3 className='text-center'>{e.title}</h3>
              <p className='text-center'>{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
