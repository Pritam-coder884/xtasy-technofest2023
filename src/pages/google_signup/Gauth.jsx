import React, { useState, useEffect } from "react";
import RegImg from "../../component/ImgReg/ImgReg";
import "../signup/signup.style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { auth, provider } from "../../utils/firbase/firebase.utils";
import Logout from "./Logout.jsx";
import FormInput from "../../component/Form/FormInput";
import { updateAccessToken } from "../../Redux/customSlice";

const Gauth = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.custom);

  const nav = useNavigate();
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
  });

  const handleClickRegister = async(e) => {
    // signInWithPopup(auth, provider).then((data) => {
    //   const accesstoken=data.user.accessToken;
    //   dispatch({type:"UpdateAccessToken",payload:accesstoken})
    //   axios.get(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
    //     headers : {
    //         Authorization : `Bearer ${accesstoken}`
    //     }
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     nav("/register");
    //   }).catch(err => {
    //     // console.log(err.message);
    //     toast.error("User Already exist");
    //   });
    // setValue(data.user.email);
    // localStorage.setItem("email", data.user.email);
    // });



    e.preventDefault();

    try {
      // const response = await axios.post(
      //   `${process.env.REACT_APP_API_URL}/api/auth/signup`,userAuth
      // );

      
      const url = `${process.env.REACT_APP_API_URL}/api/auth/signup`;
			const { data } = await axios.post(url, userAuth);

      // console.log(data.data) 
      const accesstoken=data.data;
      dispatch(updateAccessToken(accesstoken))
      localStorage.setItem("token" , accesstoken)
      
      
      nav("/register");
    } catch (err) {
      throw new Error(err.message);
    }
    
  };
  const handleClickLogin=async(e)=>{
    e.preventDefault();
    try{
      const url = `${process.env.REACT_APP_API_URL}/api/auth/login`
      const {data} = await axios.post(url , userAuth)

      const accesstoken=data.data;
      dispatch(updateAccessToken(accesstoken))
      localStorage.setItem("token" , data.data)
      nav("/profile")
    } catch(error){
      throw new Error(error.message);
    }
  }

  const handleAuthChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });
  };

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
          <h2>
            REGISTER FOR THE EXCITING{" "}
            <span style={{ color: "#EA662F" }}>RETRO</span> VERSE
          </h2>
          <div className="r_head_bottom">
            <p style={{ color: "gray" }}>
              Something really awesome is waiting for you register now to get
              the updates
            </p>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <form >
            <FormInput
              placeholder="Email Id"
              type="email"
              required
              name="email"
              value={userAuth.email}
              onChange={handleAuthChange}
            />
            <FormInput
              placeholder="Enter Passsword"
              type="password"
              required
              name="password"
              value={userAuth.password}
              onChange={handleAuthChange}
            />
            <div style={{display:"flex",width:"25rem"}}>
              <button className="submitbtn" onClick={handleClickLogin} >
                Login
              </button>
              <button className="submitbtn" onClick={handleClickRegister}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Gauth;
