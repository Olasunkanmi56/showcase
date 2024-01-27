import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import About from '../components/About'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      <Projects />
      <Technologies />
      <About/>
      <Footer />
    </div>
  )
}

export default LandingPage