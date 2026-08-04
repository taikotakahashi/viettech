import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { CTABanner } from './components/CTABanner'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Results } from './components/Results'
import { Process } from './components/Process'
import { Technologies } from './components/Technologies'
import { Industries } from './components/Industries'
import { Testimonials } from './components/Testimonials'
import { LeadershipTeam } from './components/LeadershipTeam'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CTABanner />
        <FeaturedProjects />
        <Results />
        <Process />
        <Industries />
        <LeadershipTeam />
        <Testimonials />
        <Technologies />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
