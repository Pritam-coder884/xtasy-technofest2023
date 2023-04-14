import React from 'react'
// import Navbar from '../../component/navbar/Navbar'
import Homepage from '../../component/slide4/Homepage'
import HomeTop from '../../component/HomeTop/HomeTop'
import Footer from '../../component/Footer/Footer'
import Timeline from '../../component/Timeline/Timeline'

const LandingPage = () => {
  return (
    <div>
      <HomeTop/>
      <Timeline/>
      <Homepage/>
      <Footer/>
      </div>
  )
}

export default LandingPage