import './ProcessSection.css'
import ArrowDownIcon from '../ui/ArrowDownIcon'
import { steps } from '../../data/process'

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow muted">04 / FRÅN FÖRSTA HEJ TILL ONLINE</span>
            <h2>Vi tar det steg för steg.</h2>
          </div>
          <span className="process-aside">
            Mindre teknikprat. Mer verkstad. <ArrowDownIcon />
          </span>
        </div>
        <div className="process-grid">
          {steps.map((step, i) => (
            <article key={step.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
