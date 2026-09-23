import useReveal from '../hooks/useReveal'

export default function Vision() {
  const ref = useReveal()
  const mvRef = useReveal()

  return (
    <section className="vision" id="vision">
      <div className="wrap reveal" ref={ref}>
        <div className="eyebrow">ACCESS OVER OWNERSHIP</div>
        <blockquote>
          Gara Solutions is shifting the fundamental mindset from{' '}
          <span className="from">"What do I need to own?"</span> to "What do
          I need to access?"
        </blockquote>
      </div>

      <div className="wrap mv-grid reveal reveal-stagger" ref={mvRef}>
        <div className="mv" style={{ '--i': 0 }}>
          <h3>Mission</h3>
          <p>
            To design and deliver practical technology that simplifies everyday
            life, connects people to opportunity, and makes sharing resources
            easy, safe, and trusted.
          </p>
        </div>
        <div className="mv" style={{ '--i': 1 }}>
          <h3>Vision</h3>
          <p>
            To become a leading African technology company, and to build the
            system that lets Africans share transportation, equipment, and
            everyday resources — starting locally and scaling across the
            continent.
          </p>
        </div>
      </div>

      <svg className="vision-route" viewBox="0 0 1200 140" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M 0 100 C 200 40, 400 140, 600 70 C 800 10, 1000 120, 1200 60"
          fill="none"
          stroke="#0DA200"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </section>
  )
}
