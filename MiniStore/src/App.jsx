// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

// Components
import Navbar from './components/Navbar.jsx'
import Cart from './pages/Cart.jsx'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from './components/Footer.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import FindCategoryProduct from './pages/FindCategoryProduct.jsx'

const App = () => {

  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)


      } catch (error) {
        console.log(error);

      }

    })
  }



  useEffect(() => {
    getLocation()
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/category/:category' element={<FindCategoryProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart location={location} geolocation={getLocation} />} />
        </Routes>
        <Footer /> 
      </BrowserRouter></>
  );

};

export default App;