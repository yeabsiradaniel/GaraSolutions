import useReveal from '../hooks/useReveal'

const team = [
  {
    initials: 'MM',
    name: 'Mulutsega Moges',
    role: 'CO-FOUNDER · CSO',
    focus: 'Business, operations & growth.',
  },
  {
    initials: 'HL',
    name: 'Hayou Lemessa',
    role: 'CO-FOUNDER · CTO',
    focus: 'Product, technology & direction.',
  },
  {
    initials: 'YD',
    name: 'Yeabsira Daniel',
    role: 'CO-FOUNDER · COO',
    focus: 'Technology, operations & product development.',
  },
]

export default function Team() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="team" id="team">
      <div className="wrap">
        <div className="team-head reveal" ref={headRef}>
          <div className="eyebrow">OUR EXECUTIVE TEAM</div>
          <h2>The people behind Gara.</h2>
        </div>

        <div className="team-grid reveal reveal-stagger" ref={gridRef}>
          {team.map((m, i) => (
            <div className="member" style={{ '--i': i }} key={m.name}>
              <div className="avatar">{m.initials}</div>
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
              <p>{m.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
