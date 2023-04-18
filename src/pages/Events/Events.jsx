import React from "react";
import "./Events.scss";
import Navbar from "../../component/navbar/Navbar";
import EventCards from "../../component/EventCards/EventCards";
import Footer from "../../component/Footer/Footer";
import {events} from '../../component/events'
import { useState } from "react";
import Modal from "../../component/modals/Modal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { technical } from "../../eventsData/technical"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents } from "../../Redux/customSlice";

const Events = (props) => {
  
  const {isLoading} = useSelector((state) => state.custom.isLoading);
  const dispatch = useDispatch()
  
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
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  useEffect(() => {
    dispatch(fetchAllEvents())
  },[])


  if(isLoading) {
    // console.log(isLoading)
    return <></>
  }

 const eventsNow = props.events;

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
            CHECK OUT FOR <span className="fun-part">{props.text}</span>
          </p>
        </div>
      </div>
      <div className="event-cards-1">
        <div className="all-1">
          <div className="cards-1">
            {(eventsNow?eventsNow : technical).map((event,index) => {
              return (
              
                <EventCards key={event.id} name={event.eventName} desc={event} handleClick={handleClick} img={props.text === 'TECHNICAL EVENTS' ? event.id : 35}/>)
            
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
