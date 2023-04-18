import React from "react";
import Homepage from "../../component/slide4/Homepage";
import HomeTop from "../../component/HomeTop/HomeTop";
import TimeLine from "../../component/Timeline/Timeline";
import Footer from "../../component/Footer/Footer";
import Profile from "../../component/ProfileTop/ProfileTop";

const LandingPage = () => {

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
