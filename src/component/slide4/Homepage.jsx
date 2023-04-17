import React from "react";
import "./Homepage.scss";
import clockImg from "../../Assets/images/clock.png";
import Img from "../../Assets/images/demo.png";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div className="container" id="events">
        <div className="partOne">
          <div className="headingEvents">EXCITING EVENTS FOR YOU</div>
          <div className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            tenetur ipsa est. Sit, debitis consequatur.
          </div>
          <div className="clock">
            <img src={clockImg} alt="" className="clockimg" />
          </div>
        </div>
        <div className="partTwo">
          <div className="cardContainer">
          <Link to="/funEvents" ><div className='eventCards' style={{backgroundImage:`url()`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Fun</div>
                        <div>Events</div>
                    </div>
                </div>
                </Link>
                <Link to="/cultEvents" ><div className='eventCards' style={{backgroundImage:`url()`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Cultural</div>
                        <div>Events</div>
                    </div>
                </div>
                </Link>
          </div>
          <div className="cardContainer">
          <Link to="/techEvents" ><div className='eventCards' style={{backgroundImage:`url()`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Technical</div>
                        <div>Events</div>
                    </div>
                </div>
                </Link>
                <Link to="/workshops" ><div className='eventCards' style={{backgroundImage:`url()`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Workshops</div>
                    </div>
                </div>
                </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
