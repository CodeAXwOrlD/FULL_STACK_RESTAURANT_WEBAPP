import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <div id="heroSection">
        <HeroSection/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="qualities">
        <Qualities/>
      </div>
      <div id="menu">
        <Menu/>
      </div>
      <WhoAreWe/>
      <div id="team">
        <Team/>
      </div>
      <div id="reservation">
        <Reservation/>
      </div>
      <Footer/>
    </>
  )
}

export default Home
