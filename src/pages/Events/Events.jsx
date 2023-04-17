import React from "react";
import "./Events.scss";
import Navbar from "../../component/navbar/Navbar";
import EventCards from "../../component/EventCards/EventCards";
import Footer from "../../component/Footer/Footer";
import {events} from '../../component/events'
import { useState } from "react";
import Modal from "../../component/modals/Modal";


const Events = () => {
  const [show, setShow] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [modalDescription , setModalDescription] = useState("");
  const handleClick = (id, desc) => {
    setShow(true)
    setModalId(id)
    setModalDescription(desc)
  }
  const handleClose = () => {
    setShow(false)
  }
  const handleOutsideClick = () => {
    setShow(false)
  }
  return (
    <>
      <Modal key={modalId} show={show} handleClose={handleClose} handleOutsideClick={handleOutsideClick} >{modalDescription}</Modal>
      <div className="events">
      <div className="event-top">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="head-part">
          <p className="heading">
            CHECK OUT FOR <span className="fun-part">FUN EVENTS</span>
          </p>
        </div>
        <div className="buttons">
          <button className="event-button">DAY-1</button>
          <button className="event-button">DAY-2</button>
          <button className="event-button">DAY-3</button>
        </div>
      </div>
      <div className="event-cards">
        <div className="all">
          <div className="cards">
            {events.map((event) => {
              return (
                <EventCards key={event.id} id={event.id} name={event.name} desc={event.desc} handleClick={handleClick} />
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Events;
