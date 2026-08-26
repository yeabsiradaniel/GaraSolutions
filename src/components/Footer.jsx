import useReveal from '../hooks/useReveal'

export default function Footer() {
  const ref = useReveal()

  return (
    <footer id="contact">
      <div className="wrap reveal" ref={ref}>
        <div className="amh">Let's build this, together.</div>
        <h2>Ready when you are.</h2>

        <div className="contact-row">
          <div className="contact-item">
            <span className="mono">Website</span>
            <a href="https://www.garasolutions.com">www.garasolutions.com</a>
          </div>
          <div className="contact-item">
            <span className="mono">Email</span>
            <a href="mailto:gara.solutions.et@gmail.com">gara.solutions.et@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="mono">Location</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Gara Solutions</span>
          <span>Building trust without boundaries.</span>
        </div>
      </div>
    </footer>
  )
}
