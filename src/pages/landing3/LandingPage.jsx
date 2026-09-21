import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Showcase from './Showcase.jsx'
import Philosophy from './Philosophy.jsx'
import Services from './Services.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

/**
 * LandingPage
 * Contract: LandingPage(): JSX.Element
 *
 * Root composer for the FLUX creative-studio landing page.
 * - Fragments Header, main content, and Footer
 * - Wraps sections in a single continuous dark canvas
 */
function LandingPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-50">
        <Hero />
        <Showcase />
        <Philosophy />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
