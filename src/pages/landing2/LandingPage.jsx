import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Testimonials from './Testimonials.jsx'
import Pricing from './Pricing.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

/**
 * LandingPage
 * Contract: LandingPage(): JSX.Element
 *
 * Root composer for the NEXUS landing page.
 * - Fragments the page into Header, main content, and Footer
 * - Mirrors the structure of src/pages/landing1/LandingPage.jsx
 */
function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
