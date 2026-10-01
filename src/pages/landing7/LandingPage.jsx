import Header from './Header'
import Hero from './Hero'
import Philosophy from './Philosophy'
import Collection from './Collection'
import Atmosphere from './Atmosphere'
import Contact from './Contact'
import Footer from './Footer'

/**
 * LandingPage
 * Contract: LandingPage(): JSX.Element
 *
 * AURELIA — cinematic curation landing page.
 * - Deep espresso canvas with warm alabaster typography
 * - Composes all AURELIA sections in editorial order
 * - Self-contained top-level theme wrapper
 */
function LandingPage() {
  return (
    <>
      <div className="bg-[#0F0D0A] pt-20 text-[#F5F0E8] selection:bg-[#C5A059] selection:text-[#0F0D0A]">
        <Header />
        <Hero />
        <Philosophy />
        <Collection />
        <Atmosphere />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
