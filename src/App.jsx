import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import Commertial from './pages/Commercial'
import Residential from './pages/Residential'
import Service from './pages/Service'
import Home from './components/Home'
import AllProject from './pages/AllProject'
import DreamKitchen from './pages/DreamKitchen'
import SweetDreams from './pages/SweetDreams'
import SenseAndSimplicity from './pages/SenseAndSimplicity'
import ContenporyLiving from './pages/ContemporyLiving'
import BigBunglows from './pages/BigBunglows'
import DarkSecret from './pages/DarkSecret'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
     <ScrollToTop />  
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/commercial' element={<Commertial/>}/>
        <Route path='/residential' element={<Residential/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/allproject' element={<AllProject/>}/>
        <Route path='/dream-kitchen' element={<DreamKitchen/>}/>
        <Route path='/sweet-dreams' element={<SweetDreams/>}/>
        <Route path='/sense-&-simplicity' element={<SenseAndSimplicity/>}/>
        <Route path='/dark-secret' element={<DarkSecret/>}/>
        <Route path='/big-bunglow' element={<BigBunglows/>}/>
        <Route path='/contenpory-living' element={<ContenporyLiving/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
