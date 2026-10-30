import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title =
      pathname === '/kontakt'
        ? 'Kontakt — Niyakonh'
        : 'Niyakonh — Hemsidor för företag i Bollnäs'
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      )
    } else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
