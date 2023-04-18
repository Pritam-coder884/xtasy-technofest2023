import React from "react";
import "./Modal.scss";
import axios from "axios";
import { toast } from "react-toastify";

const Modal = ({ handleClose, show, children, handleOutsideClick, size, events }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const customStyle = {
    width: size ? "40vw" : "60vw",
    position: "fixed",
    minHeight: "40vh",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily : size ? "Reuben" : "sans-serif"
  }

  const accessToken = localStorage.getItem("token")

  const handleRegister = async(eventId) => {
   const {status} = await axios.post(`${process.env.REACT_APP_API_URL}/api/event/registerEvent/${eventId}` , {} , {
      headers : {
        Authorization : `Bearer ${accessToken}`
      }
    })

    if(status === 200){
      toast.success("You have registered for the event")
      return;
    } else {
      toast.error("Please try again")
      return
    }
  }

  return (
    <div className={showHideClassName} onClick={handleOutsideClick} >
      <div style={customStyle}  className="modal-main" onClick={(e) => { e.stopPropagation() }} >
        {!size &&
        <div className="event-modal-content">
          <div className="event-img-container">
              <div className="event-image">
              <img src={`./posters/${children.id}.webp`} alt=""
              style={{height:"15rem",width:"15rem"}}
              />        
              </div>
          </div>
          <div className="event-content">
              <h1 className="event-heading">{children.eventName}</h1>
              <div className="event-details">
                  <div className="event-details-1">
                    <p style={{fontSize:"0.9rem"}}>Date & Time: {children.date}, {children.time}</p>
                    <p></p>
                  </div>
                  <div className="events-details-2">
                    <p style={{fontSize:"0.9rem"}}>Venue: {children.venue}</p>
                    <a href={children.rules} style={{color:"#F5EBB5", textDecoration:"underline", fontSize:"0.9rem", paddingBottom:"1rem"}}>Rulebook: Click here to get the rulebook</a>
                  </div>
              </div>
              <div style={{marginTop:"1rem"}}className="event-description">
                {children.eventDetails}              </div>
              <button type="button" className="button-register" onClick={() => {
                handleRegister(children._id)
              }}>Register</button>
          </div>
          <button type="button" onClick={handleClose} style={{ position: "absolute", top: "5px", right: "5px", width: "50px" }}>X</button>
        </div>}
        {size && <div className="modal-content">
          <div>
            <ul>
              {events.slice(0,8).map((event)=>{
                return (<li>{event}</li>)
              })}
            </ul>
          </div>
          <div>
            <ul>
              {events.slice(8).map((event)=>{
                return (<li>{event}</li>)
              })}
            </ul>
          </div>
          <button type="button" onClick={handleClose} style={{ position: "absolute", top: "5px", right: "5px", width: "50px" }}>
            X
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Modal;
