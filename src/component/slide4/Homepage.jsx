import React, { useEffect } from "react";
import "./Homepage.scss";
import clockImg from "../../Assets/images/clock.png";
import Img from "../../Assets/images/demo.png";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllEvents} from '../../Redux/customSlice'
import axios from "axios";
const Homepage = () => {
  const dispatch = useDispatch();
  const {eventList} = useSelector((state)=>state.custom)
  console.log("IN HOme page")
  useEffect(()=>{
    dispatch(fetchAllEvents())
    console.log(eventList)
  },[])

  return (
    <>
      <div className="container" id="events">
        <div className="partOne">
          <div className="headingEvents">EXCITING EVENTS FOR YOU</div>
          <div className="content">
          Join us and enjoy the most awaited fest of the year
          </div>
          <div className="clock">
            <img src={clockImg} alt="" className="clockimg" />
          </div>
        </div>
        <div className="partTwo">
          <div className="cardContainer">
          <Link to="/techEvents" ><div className='eventCards' style={{backgroundImage:`url(./posters/Tech.png)`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Tech</div>
                        <div>Events</div>
                    </div>
                </div>
                </Link>
                <Link to="/cultEvents" ><div className='eventCards' style={{backgroundImage:`url(./posters/Cultural.png)`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Cultural</div>
                        <div>Events</div>
                    </div>
                </div>
                </Link>
          </div>
          <div className="cardContainer">
          <Link to="/workshops" ><div className='eventCards' style={{backgroundImage:`url(./posters/Workshop.png)`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Workshop</div>
                    </div>
                </div>
                </Link>
                <Link to="/funEvents" ><div className='eventCards' style={{backgroundImage:`url(./posters/Fun.png)`, backgroundSize:"cover"}}>
                    <div className='cardText'>
                        <div>Fun</div>
                        <div>Events</div>
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
