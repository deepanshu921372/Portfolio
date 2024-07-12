import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg3 from '../components/HeroImg3'
import Experiences from '../components/Experiences'

const Experience = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg3 heading = "Experiences" text = "My most recent Expeience."/>
      <Experiences/>
      <Footer/>
    </div>
  )
}

export default Experience
