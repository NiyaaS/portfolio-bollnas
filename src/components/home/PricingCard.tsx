import './PricingCard.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import type { PricingPackage } from '../../data/pricing'

type PricingCardProps = { pack: PricingPackage }

export default function PricingCard({ pack }: PricingCardProps) {
  return (
    <article className={`price-card ${pack.popular ? 'featured' : ''}`}>
      {pack.popular && (
        <span className="popular-label">
          <Sparkles size={12} /> FÖR DIG SOM VILL VISA MER
        </span>
      )}
      <h3>{pack.name}</h3>
      <p className="price-subtitle">{pack.subtitle}</p>
      <div className="price">
        {pack.price ? (
          <>
            <span className="price-from">Från</span>
            <strong>{pack.price}</strong>
            <span>kr</span>
          </>
        ) : (
          <strong className="quote-price">Enligt offert</strong>
        )}
      </div>
      <span className="price-meta">
        {pack.price ? 'Prisidé för ett engångsprojekt' : 'Ett förslag utifrån din idé'}
      </span>
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
        className={`button ${pack.popular ? 'button-dark' : 'button-outline'}`}
        aria-label={pack.label}
      >
        {pack.price ? 'Det här passar mig' : 'Låt oss prata'}
        <ArrowUpRight size={16} />
      </Link>
    </article>
  )
}
