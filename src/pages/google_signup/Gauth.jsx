import React, { useEffect, useState } from "react";
import { auth, provider } from "../../utils/firbase/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import Logout from "./Logout";
import RegImg from "../../component/ImgReg/ImgReg";
import "../signup/signup.style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {toast,ToastContainer} from "react-toastify";


const Gauth = () => {
  const dispatch = useDispatch();
  const {accessToken} = useSelector((state)=>state.custom)

  const nav=useNavigate();

  const [value, setValue] = useState("");
  const handleClick =() => {
    signInWithPopup(auth, provider).then((data) => {
      const accesstoken=data.user.accessToken;
      dispatch({type:"UpdateAccessToken",payload:accesstoken})
        
      axios.get('http://localhost:4000/api/auth/signup', {
        headers : {
            Authorization : `Bearer ${accesstoken}`
        }
      })
      .then(res => {
        console.log(res.data);
        nav("/register");
      }).catch(err => {
        // console.log(err.message);
        toast.error("User Already exist");
      });


      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };





  useEffect(() => {
    setValue(localStorage.getItem("email"));

  });

  return (
    <div className="regpage">
      <div className="left_section">
        <div className="head">
          <h4>RETRO CRAZE</h4>
          <h1>LIGHTS</h1>
          <h1>CAMERA</h1>
          <h1 style={{ color: "#EA662F" }}>ACTION</h1>
        </div>
        <div className="rimg">
          <RegImg />
        </div>
        <div className="subscript">
          Get ready to enjoy the unforgetable retro
        </div>
      </div>
      <div className="right_section">
         <div className="r_head">
            <h2>REGISTER FOR THE EXCITING <span style={{color:"#EA662F"}}>RETRO</span> VERSE</h2>
            <div className="r_head_bottom">
                <p style={{color:"gray"}}>Something really awesome is waiting for you register now to get the updates</p>
            </div>
          </div>
        {value ? (
          <Logout />
        ) : (
          <button className="submitbtn" onClick={handleClick}>SignIN With Google</button>
        )}
    </div>
      <ToastContainer />
    </div>
  );
};

export default Gauth;


