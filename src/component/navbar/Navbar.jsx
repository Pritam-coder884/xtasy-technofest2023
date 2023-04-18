import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import img from "../../Assets/images/navbutton.png";
import logo from "../../Assets/images/logo.png"
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);
  const { pathname } = useLocation();

  const accessToken = localStorage.getItem("token")

  return (
    <div className="NavAll">
      <div className="Navbar">
        <div className="Nav">
          <Link to="/" ><div className="Logo">
          <img
            src={logo}
            alt=""
            className="logo"
          />
          </div></Link>
      
          <div className="navButton">
          {pathname === "/" ? <a href="#events"><div className="textBtn">events</div></a> : <Link to="/"><div className="textBtn">Home</div></Link>}
          {pathname === "/" && <a href="#timeline"><div className="textBtn">timeline</div></a>}
            <Link to="/profile"><div className="textBtn">profile</div></Link>
            {/* <div className="textBtn">Sign In</div> */}
            {!accessToken && <Link to="/gauth"><div className="regButton">Register</div></Link>}
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
          {pathname === "/" ? <a href="#events" className="navButton2 bottomBorder"><div>events</div></a> : <Link to="/" className="navButton2 bottomBorder"><div className="textBtn">Home</div></Link>}
          {pathname === "/" && <a href="#timeline" className="navButton2 bottomBorder"><div>timeline</div></a>}
            <Link to="/profile" className="navButton2 bottomBorder"><div >profile</div></Link>
            {/* <div className="navButton2 ">Sign In</div> */}
            {!accessToken && <Link to="/gauth"  className="regButton2"><div>Register</div></Link>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
