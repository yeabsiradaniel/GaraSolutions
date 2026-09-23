import useReveal from '../hooks/useReveal'

const team = [
  {
    initials: 'MM',
    name: 'Mulutsega Moges',
    role: 'CO-FOUNDER · CSO',
    focus: 'Business, execution & growth.',
    creds: 'B.Sc. Civil Engineering · BDS Expert',
  },
  {
    initials: 'NB',
    name: 'Nazrawit Berhanu',
    role: 'CO-FOUNDER · COO',
    focus: 'Business, operations & optimization.',
    creds: 'B.Sc. Computer Science · M.Sc. Business Management · AI Expert',
  },
  {
    initials: 'YD',
    name: 'Yeabsira Daniel',
    role: 'CO-FOUNDER · CTO',
    focus: 'Technology, operations & product.',
    creds: 'B.Sc. Software Engineering · AI Expert · UI/UX',
  },
  {
    initials: 'HL',
    name: 'Hayou Lemessa',
    role: 'CO-FOUNDER · CPO',
    focus: 'Product, information & technology.',
    creds: 'B.Sc. Electrical Engineering · UI/UX',
  },
  {
    initials: 'GM',
    name: 'Gelila Mekonnen',
    role: 'CO-FOUNDER · CXO',
    focus: 'Customer experience, communications & service.',
    creds: 'B.Sc. Electromechanical Engineering',
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
              <div className="creds">{m.creds}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
