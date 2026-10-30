import './Footer.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <Link to="/" className="wordmark">
          niyakonh<span className="brand-dot">.</span>
        </Link>
        <span>
          Hemsidor med lokal känsla.
          <br />
          Bollnäs & omnejd.
        </span>
        <Link to="/kontakt" className="text-link">
          Säg hej <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Niyakonh Sisouphanh</span>
        <span>
          Skapat med omtanke i Hälsingland <span className="purple">✳</span>
        </span>
        <a href="#top">Till toppen ↑</a>
      </div>
    </footer>
  )
}
