import Header from './Header'
import Hero from './Hero'
import Statement from './Statement'
import Capabilities from './Capabilities'
import Process from './Process'
import Work from './Work'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'

/**
 * LandingPage6
 * Contract: LandingPage6(): JSX.Element
 *
 * PRISM — World-class creative technology studio landing page.
 * Dark charcoal canvas, electric blue accent, grid-line structure,
 * functional contact form, and rich editorial sections.
 */
function LandingPage6() {
  return (
    <>
      <div className="bg-[#0F0F0F] pt-16 text-[#F5F5F5] font-sans selection:bg-[#00F0FF] selection:text-[#0F0F0F]">
        <Header />
        <Hero />
        <Statement />
        <Capabilities />
        <Process />
        <Work />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage6
