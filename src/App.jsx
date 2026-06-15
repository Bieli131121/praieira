import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Categories from './components/Categories'
import About from './components/About'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WaveDivider colorTop="#E8DFD0" colorBottom="#C4956A" />
      <Categories />
      <WaveDivider colorTop="#C4956A" colorBottom="#EFE6D5" />
      <About />
      <WaveDivider colorTop="#EFE6D5" colorBottom="#5C2E0A" />
      <CTASection />
      <Footer />
    </>
  )
}
