import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResearchAreas from './components/ResearchAreas'
import About from './components/About'
import Stats from './components/Stats'
import Publications from './components/Publications'
import Patents from './components/Patents'
import Presentations from './components/Presentations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchAreas />
        <About />
        <Stats />
        <Publications />
        <Patents />
        <Presentations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
