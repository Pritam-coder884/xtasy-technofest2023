import React, { useState } from "react";
import "./Timeline.scss";
import Modal from "../modals/Modal";
import { eventTimeline } from "../timeline";

const Timeline = () => {
  const [show, setShow] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [variable, setVariable] = useState(0);
  const handleClick = (i) => {
    setShow(true);
    // setModalId(id)
    setVariable(i)
  }
  const handleClose = () => {
    setShow(false)
  }
  const handleOutsideClick = () => {
    setShow(false)
  }
  return (
    <div id="timeline">
      <Modal show={show} handleClose={handleClose} handleOutsideClick={handleOutsideClick} size={true} events={Object.values(eventTimeline)[variable]}>

        </Modal>
      <div className="timeline" style={{padding:"5rem 0"}}>
        <div className="wholeTimeline">
          <h1>TIMELINE</h1>
          <div className="days">
            {/* {eventTimeline.map((day) => {
              return (
                <div className="content1" key={day.id}>
                  <div className="day">
                    <ul className="time-ul">
                      {
                        day.events.slice(0, 6).map((event) => (
                          <li>{event}</li>
                        ))}
                      <li>Open the Source</li>
                      <li>AI-magination</li>
                      <li>Wingman</li>
                      <li>Zero Turbulence</li>
                      <li>Auto Scavenger</li>
                      <li>Cadets</li>
                      <li className="last-item" onClick={() => {handleClick() ;handleData(day.events)}}>See More</li>
                    </ul>
                  </div>
                  <button className="btn">DAY {day.id}</button>
                </div>
              )
            })} */}

            {Object.values(eventTimeline).map((entry, index) => {
              return <div className="content1" >
                <div className="day">
                  <ul className="time-ul">
                    {entry.slice(0,6).map((item) => {
                    return(
                       <li>{item}</li> 
                       )
                  })}
                  <li className="last-item" onClick={()=>{handleClick(index)}}>See More</li>
                  </ul>
                </div>
                <button className="btn">Day {index + 1}</button>
              </div>

            })}

            {/* <div className="content2">
              <div className="day">
                <ul className="time-ul">
                  <li>Rescue Ranger</li>
                  <li>Robo War</li>
                  <li>Robo Soccer</li>
                  <li>Blind Coding</li>
                  <li>Aero Blitz</li>
                  <li>Thug of War</li>
                  <li className="last-item" onClick={handleClick}>See More</li>
                </ul>
              </div>
              <button className="btn">DAY 2</button>
            </div>
            <div className="content3">
              <div className="day"></div>
              <button className="btn">DAY 3</button>
            </div>
            <div className="content4">
              <div className="day"></div>
              <button className="btn">DAY 4</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
