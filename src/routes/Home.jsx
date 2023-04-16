import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage';
// import Login from "../pages/login/Login";
// import Register from "../pages/Register/Register";
import Signup from '../pages/signup/Signup';
import Events from '../pages/Events/Events';
import {Routes,Route} from "react-router-dom";

const Home = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/events" element={<Events/>} />
  </Routes>
 
  )
}

export default Home;