import { useEffect, useRef } from 'react'

export default function Hero() {
  const pathARef = useRef(null)
  const pathBRef = useRef(null)
  const pathMRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pathA = pathARef.current
    const pathB = pathBRef.current
    const pathM = pathMRef.current
    const dot = dotRef.current

    if (reduceMotion) {
      ;[pathA, pathB, pathM].forEach((p) => {
        p.style.strokeDasharray = 'none'
        p.style.strokeDashoffset = '0'
      })
      dot.style.display = 'none'
      return
    }

    let loopTimeout

    ;[pathA, pathB].forEach((p, i) => {
      p.style.strokeDasharray = '1'
      p.style.strokeDashoffset = '1'
      p.animate(
        [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        { duration: 1100, delay: 200 + i * 150, fill: 'forwards', easing: 'cubic-bezier(.4,0,.2,1)' }
      )
    })

    pathM.style.strokeDasharray = '1'
    pathM.style.strokeDashoffset = '1'
    pathM.animate(
      [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
      { duration: 900, delay: 1400, fill: 'forwards', easing: 'cubic-bezier(.4,0,.2,1)' }
    )

    function loopDot() {
      dot.style.offsetPath = `path('${pathM.getAttribute('d')}')`
      const anim = dot.animate(
        [
          { offsetDistance: '0%', opacity: 0 },
          { offsetDistance: '8%', opacity: 1 },
          { offsetDistance: '100%', opacity: 1 },
        ],
        { duration: 2600, easing: 'ease-in-out' }
      )
      anim.onfinish = () => {
        dot.style.opacity = 0
        loopTimeout = setTimeout(loopDot, 900)
      }
    }
    loopTimeout = setTimeout(loopDot, 2500)

    return () => clearTimeout(loopTimeout)
  }, [])

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">GARA SOLUTIONS</div>
          <h1>
            Building trust <em>without boundaries.</em>
          </h1>
          <p className="lede">
            We're an Ethiopian technology company operating as two engines at
            once: software built for businesses today, and Africa's
            trust-based sharing economy for tomorrow.
          </p>
          <div className="amh">ጋራ — Amharic for "together, to share."</div>
          <div className="cta-row">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#products" className="btn btn-ghost">
              See our products
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 420" fill="none">
            <path
              ref={pathARef}
              className="route-path route-a"
              d="M 30 60 C 140 60, 160 190, 240 210"
              pathLength="1"
            />
            <path
              ref={pathBRef}
              className="route-path route-b"
              d="M 30 360 C 140 360, 160 230, 240 210"
              pathLength="1"
            />
            <path
              ref={pathMRef}
              className="route-path route-merged"
              d="M 240 210 C 320 190, 360 120, 440 90"
              pathLength="1"
            />
            <circle className="route-node" cx="30" cy="60" r="5" stroke="#0DA200" />
            <circle className="route-node" cx="30" cy="360" r="5" stroke="#E3A857" />
            <circle className="route-node" cx="240" cy="210" r="5" stroke="#F4EFE4" />
            <circle ref={dotRef} className="route-dot" r="4.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}
