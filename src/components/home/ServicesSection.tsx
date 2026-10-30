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
        <p>
          Du behöver ingen krånglig lösning.
          <br />
          Du behöver en bra plats att visa vilka ni är,
          <br className="desktop-break" /> vad ni gör och hur man når er.
        </p>
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
          <span className="service-tag">En bra första känsla.</span>
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
          <span className="service-tag">Där dina kunder finns.</span>
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
          <span className="service-tag">Från besök till kontakt.</span>
        </article>
      </div>
    </section>
  )
}
