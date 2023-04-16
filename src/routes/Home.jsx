import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/login/Login";
// import Register from "../pages/Register/Register";
import Events from '../pages/Events/Events';
import {Routes,Route} from "react-router-dom";
import RegisterPage from "../pages/SignUp/reg_outr";

const Home = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="/events" element={<Events/>} />
  </Routes>
 
  )
}

export default Home;