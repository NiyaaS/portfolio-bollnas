import './ServicesSection.css'
import { Monitor, Smartphone, MousePointer2 } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section id="tjanster" className="section container services-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow muted">01 / VAD JAG HJÄLPER DIG MED</span>
          <h2>
            En hemsida som gör
            <br />
            det enkelt att välja dig.
          </h2>
        </div>
        <p>Tydligt innehåll, mobilanpassad design och en enkel väg till kontakt.</p>
      </div>
      <div className="services-grid">
        <article className="service group">
          <div className="service-top">
            <span className="service-icon transition-colors group-hover:bg-lilac/40">
              <Monitor />
            </span>
            <span>01</span>
          </div>
          <h3>En plats på webben</h3>
          <p>
            En modern hemsida med ditt företag i centrum. Tydlig, genomtänkt och lätt att
            hitta rätt på.
          </p>
        </article>
        <article className="service group">
          <div className="service-top">
            <span className="service-icon transition-colors group-hover:bg-lilac/40">
              <Smartphone />
            </span>
            <span>02</span>
          </div>
          <h3>Lika bra i mobilen</h3>
          <p>
            Dina kunder är på språng. Därför anpassas sidan för att fungera på mobil,
            surfplatta och dator.
          </p>
        </article>
        <article className="service group">
          <div className="service-top">
            <span className="service-icon transition-colors group-hover:bg-lilac/40">
              <MousePointer2 />
            </span>
            <span>03</span>
          </div>
          <h3>Nära till nästa kund</h3>
          <p>
            Gör det enkelt att förstå ditt erbjudande och ta nästa steg — ringa, mejla
            eller hitta till dig.
          </p>
        </article>
      </div>
    </section>
  )
}
