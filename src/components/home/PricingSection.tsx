import './PricingSection.css'
import { packages } from '../../data/pricing'
import PricingCard from './PricingCard'

export default function PricingSection() {
  return (
    <section id="priser" className="section container pricing-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow muted">03 / EN INVESTERING I DITT FÖRETAG</span>
          <h2>Liten start. Stor möjlighet.</h2>
        </div>
        <p>
          Några prisexempel att utgå ifrån.
          <br />
          Vi hittar ett upplägg som passar ditt företag.
        </p>
      </div>
      <div className="pricing-grid">
        {packages.map((pack) => (
          <PricingCard key={pack.name} pack={pack} />
        ))}
      </div>
      <p className="pricing-note">
        Preliminära prisexempel, exklusive moms. Slutpris och omfattning bestäms i offert.
        <br />
        Domän, drift och eventuella externa tjänster tillkommer.
      </p>
    </section>
  )
}
