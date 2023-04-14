import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import {Routes,Route} from "react-router-dom";

const Home = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  </Routes>
  )
}

export default Home;