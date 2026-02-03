import React, {useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'

const About = () => {
  const [about, setabout] = useState({
    aboutH1: "Our Journey",
    aboutH3: "A Journey of Taste",
    p: "Founded in 2020 in the heart of Lahore, Foodies was been a love for the fresh indgredients and authentic recipes."
  })
  return (
    <>
     <Navbar/> 
     <AboutHero/>
     <Section aboutH1={about.aboutH1} aboutH3={about.aboutH3} aboutp={about.p}/>
     <Footer/>
    </>
  )
}

export default About
