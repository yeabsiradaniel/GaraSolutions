import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <div className="logo">
          <span className=""><img src="./logo.png" alt="logo" className='w-12 h-8' /></span>Gara Solutions
        </div>
        <div className="navlinks">
          <a href="#overview">Overview</a>
          <a href="#products">Products</a>
          <a href="#vision">Vision</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
