import React, { useEffect } from "react";
import Homepage from "../../component/slide4/Homepage";
import HomeTop from "../../component/HomeTop/HomeTop";
import TimeLine from "../../component/Timeline/Timeline";
import Footer from "../../component/Footer/Footer";
import Profile from "../../component/ProfileTop/ProfileTop";
import axios from "axios";

const LandingPage = () => {
  // useEffect(() => axios.get("http://43.205.194.46:4000/api/event/getAllEvents").then((data)=>console.log(data)),[])
  return (
    <div>
      <HomeTop />
      <TimeLine />
      <Homepage />
      <Footer />
    </div>
  );
};

export default LandingPage;
