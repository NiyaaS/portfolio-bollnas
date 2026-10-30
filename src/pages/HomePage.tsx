import './HomePage.css'
import useScrollReveal from '../hooks/useScrollReveal'
import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import ShowcaseSection from '../components/home/ShowcaseSection'
import PricingSection from '../components/home/PricingSection'
import ProcessSection from '../components/home/ProcessSection'
import AboutSection from '../components/home/AboutSection'
import FaqSection from '../components/home/FaqSection'
import CallToAction from '../components/home/CallToAction'

export default function HomePage() {
  const revealRef = useScrollReveal()

  return (
    <main id="main-content" ref={revealRef}>
      <Hero />
      <ServicesSection />
      <ShowcaseSection />
      <PricingSection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <CallToAction />
    </main>
  )
}
