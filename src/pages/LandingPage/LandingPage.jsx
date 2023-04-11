import React, { useState } from "react";
import Header_slider from "../../component/slider/Header_slider";
// import Modal from '../../component/modals/Modal';
// import {Link} from "react-router-dom";
import "./LandingPage.scss";
import img1 from "../../Assets/images/Group 7571.png";
import img2 from "../../Assets/images/Group 7572.png";
import img3 from "../../Assets/images/Frame 7.png";
import Navbar from "../../component/navbar/Navbar";
import layerImg from "../../Assets/images/Layer_1.png";

const LandingPage = () => {
  // Modal Component implementation

  // const [showModal,setShowModal]=useState(false);

  // const openModalHandler=()=>{
  //   setShowModal(true);
  // }
  // const closeModalHandler=()=>{
  //   setShowModal(false);
  // }

  // const modaldata="This is a react Modal component"

  return (
    <div>
      {/* Modal Component implementation */}

      {/* <h1>Landing Page</h1>
      <Modal handleClose={closeModalHandler} show={showModal} >
         <h2 children={modaldata}></h2>
      </Modal>
     <Header_slider/>
      <button type="button" onClick={openModalHandler}>
          Open
      </button>
      <Link to="/register"><button>Register</button></Link> */}

      <Navbar />

      <div className="Content">
        <div className="first">
          <div className="firstContent">
            <div>
              <h1>
                Enter into the <span className="anime1">anime</span> verse
              </h1>
            </div>
            <div className="firstcontent__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              expedita fugiat, eveniet minima maxime deserunt.
            </p>
            </div>
          </div>
          <div className="firstimage-container">
            <div className="join-layer">
              <img
                className="layer-img rotate linear infinite"
                src={layerImg}
                alt=""
              />
              <div className="joinn">
                <img className="join" src={img3} alt="" />
              </div>
            </div>

            <div className="firstImg">
              <img className="img1" src={img1} alt="" />
            </div>
          </div>
        </div>

        {/* 2nd slide */}

        <div className="second">
          <div className="secondImg">
            <img className="img2" src={img2} alt="" />
          </div>
          <div className="secondContent">
            <h1>Know the miracle</h1>
            <div  className="firstcontent__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              rem odio quos accusantium deserunt fugiat alias nam ipsam ea
              corporis eveniet cumque, consectetur nobis ut in. Repudiandae
              culpa perferendis veritatis consequuntur saepe fuga soluta
              voluptate delectus dolorum. Quibusdam, perferendis neque.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Header_slider /> */}
    </div>
  );
};

export default LandingPage;
