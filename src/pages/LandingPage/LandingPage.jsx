import React,{useState} from 'react'
<<<<<<< HEAD
import Modal from '../../component/modals/Modal';
import {Link} from "react-router-dom";
import Header_slider from '../../component/modals/slider/Header_slider';
=======
// import Modal from '../../component/modals/Modal';
// import {Link} from "react-router-dom";
import './LandingPage.scss'
import img1 from "../../Assets/images/Group 7571.png"
import img2 from "../../Assets/images/Group 7572.png"
import img3 from "../../Assets/images/Frame 7.png"
>>>>>>> b21059fa886043d2d871dc76c1b0ac8cfbae0c0e

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



      <div className='Content'>
      <div className="joinn"><img className='join' src={img3} alt="" /></div>
      <div className="first">
        <div className="firstContent">
            <span><h1>Enter into the <span className='anime1'>anime</span> verse</h1> </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita fugiat, eveniet minima maxime deserunt.</p>
        </div>
        <div className="firstImg"><img className='img1' src={img1} alt="" /></div>
      </div>

      

      <div className="second">
        <div className="secondImg"><img className='img2' src={img2} alt="" /></div>
        <div className="secondContent">
            <h1>Know the miracle</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem odio quos accusantium deserunt fugiat alias nam ipsam ea corporis eveniet cumque, consectetur nobis ut in. Repudiandae culpa perferendis veritatis consequuntur saepe fuga soluta voluptate delectus dolorum. Quibusdam, perferendis neque.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage;