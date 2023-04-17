import React from "react";
import "./Modal.scss";

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
  {console.log(events);}
  return (
    <div className={showHideClassName} onClick={handleOutsideClick} >
      <div style={customStyle} className="modal-main" onClick={(e) => { e.stopPropagation() }} >
        {!size &&
        <div className="event-modal-content">
          <div className="event-img-container">
              <div className="event-image">
                Hello
              </div>
          </div>
          <div className="event-content">
              <h1 className="event-heading">Event Name</h1>
              <div className="event-details">
                  <div className="event-details-1">
                    <p>Date & Time</p>
                    <p>13th Mar 2023,8:00 pm</p>
                  </div>
                  <div className="events-details-2">
                    <p>Game Details</p>
                    <p>Link Here</p>
                  </div>
              </div>
              <div className="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident voluptatum quia commodi! Dignissimos molestiae illum, nobis vero assumenda quasi quisquam reprehenderit consequuntur. Quae, accusamus itaque. Similique voluptate amet, incidunt corrupti tempora aspernatur et iste odit suscipit deleniti deserunt, dolore beatae dolorum nam mollitia. Earum quasi cumque ullam magnam totam ex iusto neque magni vitae excepturi aperiam officiis, labore nostrum!
              </div>
              <button type="button" className="button-register">Register</button>
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
