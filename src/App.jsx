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
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/commercial' element={<Commertial/>}/>
        <Route path='/residential' element={<Residential/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/allproject' element={<AllProject/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
