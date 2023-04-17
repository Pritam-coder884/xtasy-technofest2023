import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children, handleOutsideClick, size, events }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const customStyle = {
    width: size ? "40vw" : "80vw",
    position: "fixed",
    height: "40vh",
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
        <div>
          {children}
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
