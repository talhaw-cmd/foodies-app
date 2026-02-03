import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Section/>
      <Footer/>
    </>
  )
}

export default Home
