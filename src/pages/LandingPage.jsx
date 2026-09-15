import Header from '../components/Layout/Header.jsx'
import Hero from '../components/Sections/Hero.jsx'
import Marquee from '../components/Sections/Marquee.jsx'
import Featured from '../components/Sections/Featured.jsx'
import Collection from '../components/Sections/Collection.jsx'
import Craftsmanship from '../components/Sections/Craftsmanship.jsx'
import Newsletter from '../components/Sections/Newsletter.jsx'
import Footer from '../components/Layout/Footer.jsx'

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

