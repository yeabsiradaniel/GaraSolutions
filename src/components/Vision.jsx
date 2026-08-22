import useReveal from '../hooks/useReveal'

export default function Vision() {
  const ref = useReveal()

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
