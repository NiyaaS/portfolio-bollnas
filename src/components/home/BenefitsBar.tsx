import './BenefitsBar.css'
import { MapPin, Smartphone, Sparkles, Check } from 'lucide-react'

export default function BenefitsBar() {
  return (
    <div className="benefit-band">
      <div className="container benefit-inner">
        <span>
          <MapPin /> Lokal kontakt
        </span>
        <span>
          <Smartphone /> Snygg i mobilen
        </span>
        <span>
          <Sparkles /> Anpassad för ditt företag
        </span>
        <span>
          <Check /> Tydligt från start
        </span>
      </div>
    </div>
  )
}
