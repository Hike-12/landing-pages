import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Statement from './Statement.jsx'
import Manifesto from './Manifesto.jsx'
import Work from './Work.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

/**
 * LandingPage5
 * Contract: LandingPage5(): JSX.Element
 *
 * Root composer for the fifth landing page.
 * - Fragments Header, main content, and Footer
 * - Wraps sections in a warm ivory palette scoped to this landing only
 */
function LandingPage5() {
  return (
    <>
      <div className="bg-[#FAF9F6] text-[#1A1917] font-sans selection:bg-[#1A1917] selection:text-[#FAF9F6]">
        <Header />
        <main>
          <Hero />
          <Statement />
          <Manifesto />
          <Work />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LandingPage5
