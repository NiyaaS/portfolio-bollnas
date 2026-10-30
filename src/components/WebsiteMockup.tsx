import './WebsiteMockup.css'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { demos } from '../data/demos'

export default function WebsiteMockup({
  variant = 0,
  large = false,
}: {
  variant?: number
  large?: boolean
}) {
  const demo = demos[variant]
  const Icon = demo.icon
  return (
    <div
      className={`website-mockup ${demo.kind} ${large ? 'mockup-large' : ''}`}
      aria-label={`Designexempel för ett fiktivt företag: ${demo.name}`}
    >
      <div className="browser-top">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>
          <span className="tiny-lock">♧</span>{' '}
          {demo.name.toLowerCase().replaceAll(' ', '').replace('&', 'och')}.se
        </span>
        <span className="browser-plus">+</span>
      </div>
      <div className="mock-site">
        <div className="mock-nav">
          <span className="mock-logo">
            <Icon size={17} strokeWidth={1.5} />
            {demo.name}
          </span>
          <span className="mock-links">
            Om oss <span>Hitta hit</span>
          </span>
        </div>
        <div className="mock-content">
          <div className="mock-copy">
            <span className="mock-eyebrow">{demo.location}</span>
            <h3>
              {demo.tagline.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <p>
              {variant === 0
                ? 'Där skogen möter kaffet. Välkommen till en stund som får ta sin tid.'
                : variant === 1
                  ? 'Från den första idén till den sista detaljen. Vi hjälper dig hela vägen.'
                  : 'Vi gör det komplexa lite enklare. Tillsammans tar vi din verksamhet framåt.'}
            </p>
            <span className="mock-button">
              {demo.button} <ArrowUpRight size={12} />
            </span>
            <span className="mock-note">Med rötterna i Hälsingland.</span>
          </div>
          <div className="mock-image">
            <img
              src={`${import.meta.env.BASE_URL}landscape.svg`}
              alt="Illustrerat hälsingelandskap med skog, berg och en stilla sjö"
            />
            <span className="image-label">
              Nära naturen.
              <br />
              Nära dig.
            </span>
            <span className="image-star">✳</span>
          </div>
        </div>
        <div className="mock-footer">
          <span>En plats att landa på.</span>
          <span>
            Välkommen in <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </div>
  )
}
