import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage';
// import Login from "../pages/login/Login";
// import Register from "../pages/Register/Register";
import Signup from '../pages/signup/Signup';
import Events from '../pages/Events/Events';
import {Routes,Route} from "react-router-dom";
import Gauth from '../pages/google_signup/Gauth';
import Profile from '../pages/Profile/Profile';
import { useSelector } from 'react-redux';
import { selectCulturalEvents, selectTechincalEvents } from '../Redux/selector';

const Home = () => {
  const technicalEvents = useSelector(selectTechincalEvents)
  const cultEvents = useSelector(selectCulturalEvents)

  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/gauth" element={<Gauth />} />
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/funEvents" element={<Events text='FUN EVENTS'/>} />
    <Route path="/cultEvents" element={<Events text='CULTURAL EVENTS' events={cultEvents} />}  />
    <Route path="/techEvents" element={<Events text='TECHNICAL EVENTS' events={technicalEvents} />}  />
    <Route path="/workshops" element={<Events text='WORKSHOPS'/>} />
    {/* <Route path="*" element={<NotFound/>} /> */}
  </Routes>
 
  )
}

export default Home;