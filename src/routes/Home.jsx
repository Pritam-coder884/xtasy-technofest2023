import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import {Routes,Route} from "react-router-dom";
import Footer from '../component/Footer/Footer'
import HomeTop from '../component/HomeTop/HomeTop'
import Timeline from '../component/Timeline/Timeline'
import Card from '../component/card_register/Card'
import RegImage from '../component/register/RegImage';
import Reg_OUTR from '../pages/SignUp/reg_outr';

const Home = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Reg_OUTR/>} />
  </Routes>
  )
}

export default Home;