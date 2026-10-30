import './Header.css'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label="Niyakonh, startsida">
          niyakonh<span className="brand-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Huvudmeny">
          <Link to="/#tjanster">Vad jag gör</Link>
          <Link to="/#priser">Prisförslag</Link>
          <Link to="/#om">Om mig</Link>
        </nav>
        <Link to="/kontakt" className="button button-dark header-contact">
          Låt oss prata <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-button"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav id="mobile-nav" className="mobile-nav sm:px-10" aria-label="Mobilmeny">
            <Link to="/#tjanster" onClick={() => setOpen(false)}>
              Vad jag gör
            </Link>
            <Link to="/#priser" onClick={() => setOpen(false)}>
              Prisförslag
            </Link>
            <Link to="/#om" onClick={() => setOpen(false)}>
              Om mig
            </Link>
            <Link to="/kontakt">
              Låt oss prata <ArrowUpRight size={18} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
