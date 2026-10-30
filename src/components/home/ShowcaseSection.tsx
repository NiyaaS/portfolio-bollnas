import './ShowcaseSection.css'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { demos } from '../../data/demos'
import WebsiteMockup from '../WebsiteMockup'

export default function ShowcaseSection() {
  const [demo, setDemo] = useState(0)
  return (
    <section className="showcase-section">
      <div className="container showcase-grid">
        <div className="showcase-copy min-w-0">
          <span className="eyebrow muted">02 / MÖJLIGHETER</span>
          <h2>
            Lokala företag.
            <br />
            Egna uttryck.
          </h2>
          <p>
            Ett mysigt café, en skicklig hantverkare eller nästa stora idé. Din hemsida
            ska kännas som ditt företag.
          </p>
          <div className="demo-tabs" role="tablist" aria-label="Välj designexempel">
            {demos.map((item, i) => (
              <button
                id={`demo-tab-${i}`}
                role="tab"
                aria-selected={demo === i}
                aria-controls="demo-panel"
                tabIndex={demo === i ? 0 : -1}
                onKeyDown={(event) => {
                  if (
                    [
                      'ArrowDown',
                      'ArrowUp',
                      'ArrowRight',
                      'ArrowLeft',
                      'Home',
                      'End',
                    ].includes(event.key)
                  ) {
                    event.preventDefault()
                    const next =
                      event.key === 'Home'
                        ? 0
                        : event.key === 'End'
                          ? 2
                          : (demo +
                              (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : 2)) %
                            3
                    setDemo(next)
                    document.getElementById(`demo-tab-${next}`)?.focus()
                  }
                }}
                key={item.name}
                onClick={() => setDemo(i)}
                className={demo === i ? 'active' : ''}
              >
                {item.category}
                <ArrowUpRight size={18} />
              </button>
            ))}
          </div>
          <p className="demo-disclaimer">
            Designkoncept för fiktiva företag, inte kundprojekt.
          </p>
        </div>
        <div
          id="demo-panel"
          role="tabpanel"
          aria-labelledby={`demo-tab-${demo}`}
          className="showcase-demo"
        >
          <WebsiteMockup key={demo} variant={demo} large />
          <div className="showcase-caption">
            <span>{demos[demo].description}</span>
            <span className="concept-label">DESIGNKONCEPT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
