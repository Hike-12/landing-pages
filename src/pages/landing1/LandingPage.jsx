import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Marquee from './Marquee.jsx'
import Featured from './Featured.jsx'
import Collection from './Collection.jsx'
import Craftsmanship from './Craftsmanship.jsx'
import Newsletter from './Newsletter.jsx'
import Footer from './Footer.jsx'

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <Collection />
        <Craftsmanship />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage

