import './CallToAction.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="container final-cta">
      <div>
        <span className="eyebrow">DITT NÄSTA STEG BÖRJAR HÄR</span>
        <h2>
          Har du en idé?
          <br />
          Jag hjälper dig vidare.
        </h2>
        <p>En idé, en fråga eller bara nyfiken? Vi börjar där.</p>
      </div>
      <Link to="/kontakt" className="button button-dark">
        Låt oss prata <ArrowUpRight size={19} />
      </Link>
      <span className="cta-star" aria-hidden="true">
        ✳
      </span>
    </section>
  )
}
