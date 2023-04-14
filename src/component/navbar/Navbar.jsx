import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import img from "../../Assets/images/navbutton.png";
import logo from "../../Assets/images/logo.png"

const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);
  return (
    <div className="NavAll">
      <div className="Navbar">
        <div className="Nav">
          <div className="Logo">
          <img
            src={logo}
            alt=""
            className="logo"
          />
          </div>
          <div className="navContent1">
            <div className="textBtn">events</div>
            <div className="textBtn">timeline</div>
            <div className="textBtn">highlights</div>
          </div>
          <div className="navButton">
            <div className="textBtn">Sign In</div>
            <div className="regButton">Register</div>
          </div>

          <img
            src={img}
            alt=""
            className="hamBtn"
            onClick={() => setNavBtn(!navBtn)}
          />
        </div>
      </div>
      {navBtn && (
        <div className="nav2">
          <div className="navContent2">
            <div className="navButton2 bottomBorder">events</div>
            <div className="navButton2 bottomBorder">timeline</div>
            <div className="navButton2 bottomBorder">highlights</div>
            <div className="navButton2 ">Sign In</div>
            <div className="regButton2">Register</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
