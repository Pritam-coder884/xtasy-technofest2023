import React, { useState} from "react";
import "./signup.style.scss";
// import "./reg.style.scss";
import FormInput from "../../component/Form/FormInput";
import RegImg from "../../component/ImgReg/ImgReg";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    phone: "",
    wpnumber: "",
    reg_number: "",
  });

  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (userRegister.phone.length !== 10) {
      toast.error("Please put 10 digit mobile number");
      return;
    }
    if (userRegister.wpnumber.length !== 10) {
      toast.error("Please give correct whatsApp number");
      return;
    }
    
    console.log(userRegister);
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
              name="phone"
              value={userRegister.phone}
              onChange={handleRegisterChange}
            />
            <FormInput
              placeholder="Whatsapp Number"
              type="text"
              required
              name="wpnumber"
              value={userRegister.wpnumber}
              onChange={handleRegisterChange}
            />
            <FormInput
              placeholder="Registration Number"
              type="text"
              required
              name="reg_number"
              value={userRegister.reg_number}
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
