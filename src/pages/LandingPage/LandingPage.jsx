import React,{useState} from 'react'
import Modal from '../../component/modals/Modal';
import {Link} from "react-router-dom";
import Header_slider from '../../component/modals/slider/Header_slider';

const LandingPage = () => {
  const [showModal,setShowModal]=useState(false);

  const openModalHandler=()=>{
    setShowModal(true);
  }
  const closeModalHandler=()=>{
    setShowModal(false);
  }

  const modaldata="This is a react Modal component"


  return (
    <div>
      <h1>Landing Page</h1>
      <Modal handleClose={closeModalHandler} show={showModal} >
         <h2 children={modaldata}></h2>
      </Modal>
     <Header_slider/>
      <button type="button" onClick={openModalHandler}>
          Open
      </button>
      <Link to="/register"><button>Register</button></Link>
    </div>
  )
}

export default LandingPage;