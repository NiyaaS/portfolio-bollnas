import Hero from '../components/home/Hero'
import BenefitsBar from '../components/home/BenefitsBar'
import ServicesSection from '../components/home/ServicesSection'
import ShowcaseSection from '../components/home/ShowcaseSection'
import PricingSection from '../components/home/PricingSection'
import ProcessSection from '../components/home/ProcessSection'
import AboutSection from '../components/home/AboutSection'
import FaqSection from '../components/home/FaqSection'
import CallToAction from '../components/home/CallToAction'

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <BenefitsBar />
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
