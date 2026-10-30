import { useEffect, useRef } from 'react'

const targets = [
  '.section-heading',
  '.service',
  '.showcase-copy',
  '.showcase-demo',
  '.price-card',
  '.process-grid article',
  '.about-visual',
  '.about-copy',
  '.faq-item',
  '.final-cta',
].join(', ')

export default function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!root || preference.matches || !('IntersectionObserver' in window)) return

    const elements = Array.from(root.querySelectorAll<HTMLElement>(targets))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08 },
    )

    for (const element of elements) {
      // Content already on screen stays visible, including when opening an anchor link.
      if (element.getBoundingClientRect().top < window.innerHeight) continue
      const index = Array.from(element.parentElement?.children ?? []).indexOf(element)
      element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 65}ms`)
      element.classList.add('reveal-ready')
      observer.observe(element)
    }

    const showAll = () => {
      if (!preference.matches) return
      elements.forEach((element) => element.classList.add('is-revealed'))
      observer.disconnect()
    }
    preference.addEventListener('change', showAll)

    return () => {
      observer.disconnect()
      preference.removeEventListener('change', showAll)
      elements.forEach((element) => {
        element.classList.remove('reveal-ready', 'is-revealed')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return ref
}
