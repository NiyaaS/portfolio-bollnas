import './Hero.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Check, CornerDownRight } from 'lucide-react'
import ArrowDownIcon from '../ui/ArrowDownIcon'
import WebsiteMockup from '../WebsiteMockup'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy min-w-0">
        <div className="eyebrow">
          <span className="status-dot" /> DIN LOKALA WEBBPARTNER I BOLLNÄS
        </div>
        <h1>
          Ditt företag.
          <br />
          Fast mer{' '}
          <span className="highlight">
            synligt
            <svg viewBox="0 0 300 15" aria-hidden="true">
              <path d="M3 11Q140-4 294 7" />
            </svg>
          </span>
          .
        </h1>
        <p className="hero-description text-pretty">
          Du är bra på det du gör.
          <br />
          Jag hjälper dig att visa det på webben.
        </p>
        <p className="hero-detail text-pretty">
          Från första skiss till lansering — vi hittar ett upplägg som passar din
          verksamhet.
        </p>
        <div className="hero-actions">
          <Link className="button button-dark" to="/kontakt">
            Berätta om ditt företag <ArrowUpRight size={18} />
          </Link>
          <a href="#priser" className="text-link">
            Se prisförslag <ArrowDownIcon />
          </a>
        </div>
        <div className="hero-footnote">
          <MapPin size={14} /> Bollnäs, Hälsingland <span>·</span> Nära till ett samtal.
        </div>
      </div>
      <div className="hero-art">
        <div className="art-orbit" />
        <span className="art-spark">✳</span>
        <div className="hero-mockup">
          <WebsiteMockup variant={2} />
        </div>
        <div className="floating-note">
          <span className="floating-icon">
            <Check size={17} />
          </span>
          <span>
            Från lokal idé
            <br />
            <strong>till en plats på webben.</strong>
          </span>
        </div>
        <span className="example-caption">
          <CornerDownRight size={15} /> Ett smakprov på vad vi kan skapa
        </span>
      </div>
    </section>
  )
}
