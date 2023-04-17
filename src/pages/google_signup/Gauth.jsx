import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import RegImg from "../../component/ImgReg/ImgReg";
import "../signup/signup.style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { SignInWithGooglePopup } from "../../utils/firbase/firebase.utils";

const Gauth = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.custom);

  const nav = useNavigate();

  const [value, setValue] = useState("");
  const handleClick = async () => {
    try {
      await SignInWithGooglePopup();
      return toast.success("Successfully signed in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      return toast.error("There was an error while Signing in !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
        {value ? (
          <Logout />
        ) : (
          <div className="bt_container">
          <button className="submitbtn" onClick={handleClick}>SignIN With Google</button>
          </div>

        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Gauth;
