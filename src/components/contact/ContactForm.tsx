import './ContactForm.css'
import { useState } from 'react'
import { ArrowUpRight, Check, CheckCheck, Copy } from 'lucide-react'

type ContactFormProps = { selectedPackage: string | null }

export default function ContactForm({ selectedPackage }: ContactFormProps) {
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [copyError, setCopyError] = useState(false)
  const [prepared, setPrepared] = useState(false)
  const inquiry = `Hej Niyakonh!\n\nJag heter ${name}${company ? ` och kommer från ${company}` : ''}.\n${selectedPackage ? `Jag är intresserad av ${selectedPackage}.\n` : ''}\n${message}\n\nDu når mig på ${email}.`
  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiry)
      setCopied(true)
      setCopyError(false)
    } catch {
      setCopyError(true)
    }
  }

  return (
    <div className="contact-form-card">
      <h2>Vad har du i tankarna?</h2>
      <p className="form-intro text-pretty">Några rader räcker för att börja.</p>
      {selectedPackage && (
        <div className="selected-package">
          <Check size={16} /> Du är nyfiken på: <strong>{selectedPackage}</strong>
        </div>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setPrepared(true)
          setCopied(false)
        }}
      >
        <div className="form-row">
          <label>
            Ditt namn
            <input
              name="name"
              autoComplete="name"
              placeholder="För- och efternamn"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setPrepared(false)
              }}
            />
          </label>
          <label>
            Företag <span>(valfritt)</span>
            <input
              name="company"
              autoComplete="organization"
              placeholder="Ditt företagsnamn"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value)
                setPrepared(false)
              }}
            />
          </label>
        </div>
        <label>
          Din mejladress
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="du@dittforetag.se"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setPrepared(false)
            }}
          />
        </label>
        <label>
          Berätta om din idé
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Vad gör ditt företag och vad skulle du vilja ha hjälp med?"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setPrepared(false)
            }}
          />
        </label>
        <button type="submit" className="button button-dark form-submit">
          Förbered min förfrågan <ArrowUpRight size={17} />
        </button>
        <p className="form-note">Mallversion · Förfrågan skickas inte.</p>
      </form>
      {prepared && (
        <div className="inquiry-result space-y-2" role="status">
          <h3>Din förfrågan är redo att kopiera</h3>
          <textarea
            aria-label="Din färdiga förfrågan"
            readOnly
            value={inquiry}
            rows={8}
          />
          <button type="button" className="button button-outline" onClick={copyInquiry}>
            {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
            {copied ? 'Kopierad!' : 'Kopiera texten'}
          </button>
          {copyError && <p>Markera texten ovan och kopiera den manuellt.</p>}
          <p>Inget har skickats. Spara texten tills kontaktuppgifterna finns här.</p>
        </div>
      )}
    </div>
  )
}
