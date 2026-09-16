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
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Marquee />
        <Featured />
        <Collection />
        <Craftsmanship />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage

