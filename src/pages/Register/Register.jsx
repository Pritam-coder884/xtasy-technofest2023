import React, {useState,useEffect } from "react";
import {useNavigate,Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import "../login/Login.css";
import { registerInitiate } from "../../Redux/action";
import { ToastContainer } from "react-toastify";


const Register = () => {
  const nav=useNavigate();
  const [userRegister,setUserRegister]=useState({
    name:"",
    email:"",
    password:"",
  })
  const {currentUser} = useSelector((state)=>state.user);
  // console.log(currentUser);

  useEffect(()=>{
    if(currentUser !== null ){
      console.log(currentUser);
    }
  },[currentUser]);

  const dispatch=useDispatch();

  const handleRegisterSubmit=(e)=>{
    e.preventDefault();
    dispatch(registerInitiate(userRegister.email,userRegister.password,userRegister.name))
  }
  const handleRegisterChange=(e)=>{
    setUserRegister({...userRegister,[e.target.name]:e.target.value});
  }
  return (
    <div className="login-container">
      <div className="login-box" style={{ marginTop: "8vh" }}>
        <form onSubmit={handleRegisterSubmit}>
          <div className="login-input-box">
            <label>Enter your Name</label>
            <input type="text" required name="name" value={userRegister.name} onChange={handleRegisterChange} />
          </div>
          <div className="login-input-box">
            <label>Enter your Email</label>
            <input type="email" required name="email" value={userRegister.email} onChange={handleRegisterChange} />
          </div>
          <div className="login-input-box">
            <label>Enter your Password</label>
            <input type="password" required name="password" value={userRegister.password} onChange={handleRegisterChange} />
          </div>
          <div className="login-input-box">
            <button>Register</button>
          </div>
        </form>
        <div className="login-input-box">
          <button>Sign up with Google</button>
        </div>
        <div className="login-input-box" style={{ textAlign: "center" }}>
          <p>
            Already have an account !{" "}
            <span className="render-to-signup">
              <Link to="/login">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
