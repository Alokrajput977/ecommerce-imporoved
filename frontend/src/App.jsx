import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Cart from "./pages/cart/cart"
import Placeorder from "./pages/placeorder/placeorder"
import Footer from '../footer/footer'
import Loginpopup from './components/Loginpopup/Loginpopup'

const App = () => {

  const [showLogin,setshowLogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin} />:<></>}
   <div className='app'>
      <Navbar setshowLogin={setshowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
    </div>
  <Footer/>
    </>
  )
   
}

export default App
