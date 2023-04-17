import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children ,handleOutsideClick }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleOutsideClick} >
      <div className="modal-main" onClick={(e) => {e.stopPropagation()}} >
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
