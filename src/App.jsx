import React, { createContext, useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import { pass } from './components/Context.jsx'
import Checkout from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'


const App = () => {
  const [data, setdata] = useState({
    p: "At Foodies serve delicious and freshly prepared high quality hygenic food.",
    h3: "Enjoy a wonderful dining experience",
    h2: "Welcome to Foodies",
    h1: "About Us"
  });
  const [cart, setcart] = useState([])
  return (
    <>
    <pass.Provider value={{data, setdata, cart, setcart}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </pass.Provider>
    </>
  )
}

export default App
