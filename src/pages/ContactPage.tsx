import './ContactPage.css'
import { Link, useLocation } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  const location = useLocation()
  const selectedPackage = new URLSearchParams(location.search).get('paket')
  return (
    <main id="main-content" className="contact-page container">
      <Link to="/" className="back-link">
        ← Till startsidan
      </Link>
      <div className="contact-grid">
        <div className="contact-intro min-w-0">
          <span className="eyebrow">
            <span className="status-dot" /> NÄRA TILL ETT SAMTAL
          </span>
          <h1>
            Allt börjar
            <br />
            med ett <span className="purple">hej.</span>
          </h1>
          <p className="contact-lead">
            Berätta lite om ditt företag.
            <br />
            Så tar vi nästa steg tillsammans.
          </p>
          <div className="contact-person">
            <span className="contact-avatar">ns.</span>
            <div>
              <strong>Niyakonh Sisouphanh</strong>
              <span>
                <MapPin size={13} /> Bollnäs med omnejd
              </span>
            </div>
          </div>
          <div className="contact-template-note">
            <span className="eyebrow muted">EN FÖRSTA VERSION</span>
            <p>
              Kontaktuppgifterna kommer snart. Du kan redan nu förbereda och kopiera en
              förfrågan här. Inget skickas eller sparas på webbplatsen.
            </p>
          </div>
        </div>
        <ContactForm selectedPackage={selectedPackage} />
      </div>
    </main>
  )
}
