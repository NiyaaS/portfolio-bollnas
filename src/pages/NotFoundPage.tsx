import './NotFoundPage.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main id="main-content" className="container not-found">
      <span className="eyebrow muted">404 / HÄR VAR DET TOMT</span>
      <h1>Den sidan finns inte.</h1>
      <Link to="/" className="button button-dark">
        Till startsidan <ArrowRight size={16} />
      </Link>
    </main>
  )
}
