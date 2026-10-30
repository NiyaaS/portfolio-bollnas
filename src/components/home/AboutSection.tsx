import './AboutSection.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="om" className="section container about-section">
      <div className="about-visual">
        <div className="monogram">
          ns<span>✳</span>
        </div>
        <span className="location-pill">
          <MapPin size={13} /> BOLLNÄS, HÄLSINGLAND
        </span>
      </div>
      <div className="about-copy min-w-0">
        <span className="eyebrow muted">05 / PERSONEN BAKOM</span>
        <h2>
          Hej, Niyakonh här<span className="purple">.</span>
        </h2>
        <p className="about-intro">
          Du pratar direkt med mig, från första skiss till färdig sida.
        </p>
        <p>
          Jag heter Niyakonh Sisouphanh och vill hjälpa företag i Bollnäs med omnejd att
          få en tydlig och personlig närvaro online.
        </p>
        <Link to="/kontakt" className="text-link">
          Vi börjar med ett hej <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  )
}
