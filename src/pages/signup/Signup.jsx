import React, {useState} from "react";
import "./signup.style.scss";
import FormInput from "../../component/Form/FormInput";
import RegImg from "../../component/ImgReg/ImgReg";
import { toast, ToastContainer } from "react-toastify";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import axios from "axios";

const Signup = () => {
 const nav=useNavigate();

  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    registrationNumber: "",
  });
  const {accessToken} = useSelector((state)=>state.custom)


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (userRegister.phoneNumber.length !== 10) {
      toast.error("Please put 10 digit mobile number");
      return;
    }
    if (userRegister.whatsappNumber.length !== 10) {
      toast.error("Please give correct whatsApp number");
      return;
    }
    // console.log(userRegister);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/updateDetails",
        userRegister,
        {
          headers : {
              Authorization : `Bearer ${accessToken}`
          }
        },
      );
      console.log("registered successfully");
      nav("/");
    } catch (err) {
      throw new Error(err.message);
    }


  };
  
  const handleRegisterChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  return (
    <div>
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
            <h2>YOU ARE ALMOST THERE!!</h2>
          </div>
          <form onSubmit={handleRegisterSubmit}>
            <FormInput
              placeholder="Name"
              type="text"
              required
              name="name"
              value={userRegister.name}
              onChange={handleRegisterChange}
            />

            <FormInput
              placeholder="Email Id"
              type="email"
              required
              name="email"
              value={userRegister.email}
              onChange={handleRegisterChange}
            />

            <FormInput
              placeholder="Phone Number"
              type="text"
              required
              name="phoneNumber"
              value={userRegister.phoneNumber}
              onChange={handleRegisterChange}
            />
            <FormInput
              placeholder="Whatsapp Number"
              type="text"
              required
              name="whatsappNumber"
              value={userRegister.whatsappNumber}
              onChange={handleRegisterChange}
            />
            <FormInput
              placeholder="Registration Number"
              type="text"
              required
              name="registrationNumber"
              value={userRegister.registrationNumber}
              onChange={handleRegisterChange}
            />
            <button className="submitbtn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
