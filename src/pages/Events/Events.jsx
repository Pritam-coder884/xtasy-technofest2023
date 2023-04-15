import React from "react";
import "./Events.scss";
import Navbar from "../../component/navbar/Navbar";
import EventCards from "../../component/EventCards/EventCards";
import Footer from "../../component/Footer/Footer";
import '../../fonts/Reuben Condensed.otf'

const Events = () => {
  return (
    <div className="events">
      <div className="event-top">
      <div className="navbar"><Navbar/></div>
        <div className="head-part">
          <p className="heading">
            CHECK OUT FOR <span className="fun-part">FUN EVENTS</span>
          </p>
        </div>
        <div className="buttons">
          <button>DAY-1</button>
          <button>DAY-2</button>
          <button>DAY-3</button>
        </div>
      </div>
      <div className="event-cards"><EventCards /></div>
      <Footer />
    </div>
  );
};

export default Events;
