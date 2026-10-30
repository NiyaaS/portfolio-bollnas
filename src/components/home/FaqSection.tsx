import './FaqSection.css'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { questions } from '../../data/faq'

export default function FaqSection() {
  const [faq, setFaq] = useState<number | null>(0)
  return (
    <section className="faq-section container">
      <div>
        <span className="eyebrow muted">BRA ATT VETA</span>
        <h2>
          Några vanliga
          <br />
          funderingar.
        </h2>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], i) => (
          <div className="faq-item" key={question}>
            <h3>
              <button
                aria-expanded={faq === i}
                aria-controls={`faq-${i}`}
                onClick={() => setFaq(faq === i ? null : i)}
              >
                {question}
                {faq === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={faq !== i}>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
