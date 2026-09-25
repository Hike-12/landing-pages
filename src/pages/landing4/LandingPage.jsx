import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Statement from './Statement.jsx'
import Index from './Index.jsx'
import Gallery from './Gallery.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

/**
 * LandingPage4
 * Contract: LandingPage4(): JSX.Element
 *
 * Root composer for the fourth landing page.
 * - Fragments Header, main content, and Footer
 * - Wraps sections in a warm paper palette scoped to this landing only
 */
function LandingPage4() {
  return (
    <>
      <div className="bg-[#F4F1EA] pt-16 text-[#111111] font-sans selection:bg-[#111111] selection:text-[#F4F1EA]">
        <Header />
        <Hero />
        <Statement />
        <Index />
        <Gallery />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage4
