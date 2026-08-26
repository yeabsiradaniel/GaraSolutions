import useReveal from '../hooks/useReveal'

const problems = [
  {
    title: 'Access to quality software is limited',
    body: "Many African businesses can't find affordable, locally-understood technology partners to build the tools they need to grow.",
  },
  {
    title: 'Everyday resources sit idle',
    body: 'Cars, bikes, tools, land, and equipment go underused while the people nearby who need them have no trusted way to access them.',
  },
]

export default function Problem() {
  const headRef = useReveal()
  const cardsRef = useReveal()

  return (
    <section className="problem">
      <div className="wrap">
        <div className="problem-head reveal" ref={headRef}>
          <div className="eyebrow">THE PROBLEM</div>
          <h2>The problem we see.</h2>
          <p className="root">
            Two problems. One root cause: there's no trusted system built for
            how Africans actually share.
          </p>
        </div>

        <div className="problem-cards reveal reveal-stagger" ref={cardsRef}>
          {problems.map((p, i) => (
            <div className="p-card" style={{ '--i': i }} key={p.title}>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
