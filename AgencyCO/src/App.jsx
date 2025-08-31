import './App.css'
import AboutUs from './components/AboutUs'
import Acchivements from './components/Acchivements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import LogoSec from './components/LogoSec'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import PromoSec from './components/PromoSec'
import Services from './components/Services'
import Tagline from './components/Tagline'
import Testmonials from './components/Testmonials'
import VideoSec from './components/VideoSec'

function App() {

  return (

    <>
      <NavBar />
      <HeroSection />
      <Acchivements />
      <LogoSec />
      <PromoSec />
      <AboutUs />
      <VideoSec />
      <Services />
      <Pricing />
      <Testmonials />
      <Contact />
      <Tagline />
      <Footer/>
    </>
  )
}

export default App
