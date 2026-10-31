import './PricingCard.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import type { PricingPackage } from '../../data/pricing'

type PricingCardProps = { pack: PricingPackage }

export default function PricingCard({ pack }: PricingCardProps) {
  return (
    <article className={`price-card ${pack.featured ? 'featured' : ''}`}>
      {pack.featured && (
        <span className="popular-label">
          <Sparkles size={12} /> MER UTRYMME FÖR DITT FÖRETAG
        </span>
      )}
      <h3>{pack.name}</h3>
      <p className="price-subtitle">{pack.subtitle}</p>
      <div className="price">
        <strong>{pack.price}</strong>
        <span>kr</span>
      </div>
      <span className="price-meta">Introduktionspris · engångspris exkl. moms</span>
      <div className="price-divider" />
      <ul>
        {pack.features.map((feature) => (
          <li key={feature}>
            <Check size={15} />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={`/kontakt?paket=${encodeURIComponent(pack.name)}`}
        className={`button ${pack.featured ? 'button-dark' : 'button-outline'}`}
        aria-label={pack.label}
      >
        {pack.buttonText}
        <ArrowUpRight size={16} />
      </Link>
    </article>
  )
}
