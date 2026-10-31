import './PricingSection.css'
import { packages } from '../../data/pricing'
import PricingCard from './PricingCard'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PricingSection() {
  return (
    <section id="priser" className="section container pricing-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow muted">03 / EN INVESTERING I DITT FÖRETAG</span>
          <h2>En tydlig start. Ett tydligt pris.</h2>
        </div>
        <p>
          Du lämnar materialet. Jag bygger hemsidan och hjälper dig hela vägen online.
        </p>
      </div>
      <div className="intro-offer">
        <span className="intro-offer-label">
          <Sparkles size={17} /> Introduktionspris för mina första kunder
        </span>
        <p>
          Jag bygger upp min kundportfölj i Bollnäs med omnejd. Därför erbjuder jag de här
          två paketen till ett introduktionspris, med omfattningen tydligt beskriven
          nedan.
        </p>
      </div>
      <div className="pricing-grid">
        {packages.map((pack) => (
          <PricingCard key={pack.name} pack={pack} />
        ))}
      </div>
      <div className="pricing-details">
        <article>
          <h3>Det här lämnar du</h3>
          <ul>
            <li>Färdiga texter om företaget och dina tjänster.</li>
            <li>
              Upp till fem bilder för Start eller tio för Företag, som du har rätt att
              använda.
            </li>
            <li>
              Logotyp om du har en, önskade färger, kontaktuppgifter och öppettider.
            </li>
            <li>
              Tillgång till domäninställningar, eller besked om att du behöver en ny
              domän.
            </li>
          </ul>
        </article>
        <article>
          <h3>Det här tillkommer</h3>
          <ul>
            <li>
              Domännamn och drift/webbhotell betalas separat. Du får veta kostnaden innan
              du beställer.
            </li>
            <li>
              Eventuella betaltjänster, till exempel för formulär eller bokning, godkänns
              av dig först.
            </li>
            <li>
              Textproduktion, fotografering, ny logotyp och fler sidor offereras separat.
            </li>
            <li>
              Webbshop, bokningssystem, fler språk och löpande ändringar ingår inte.
            </li>
          </ul>
        </article>
      </div>
      <p className="pricing-note">
        Fast pris för omfattningen ovan, exklusive moms. Vi bekräftar innehåll, kostnader
        och leveranstid i offerten innan start. En ändringsrunda är en samlad lista med
        justeringar av det överenskomna innehållet.
      </p>
      <p className="pricing-custom">
        Behöver du något annat?{' '}
        <Link to="/kontakt" className="text-link">
          Berätta om din idé så tar vi fram en offert.
        </Link>
      </p>
    </section>
  )
}
