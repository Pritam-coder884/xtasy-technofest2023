import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [userlogin,setUserLogin]=useState({
    email:"",
    password:"",
  });
  const handleloginUser=(e)=>{
    e.preventDefault();
    console.log(userlogin);
  }
  const handleChangeloginUser=(e)=>{
   setUserLogin({...userlogin,[e.target.name]:e.target.value})
  }
  const handleGoogleSignin=()=>{
    
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleloginUser}>
          <div className="login-input-box">
            <label>Enter your Email</label>
            <input type="email" required onChange={handleChangeloginUser} name="email" value={userlogin.email} />
          </div>
          <div className="login-input-box">
            <label>Enter your Password</label>
            <input type="password" required onChange={handleChangeloginUser} name="password" value={userlogin.password} />
          </div>
          <div className="login-input-box">
            <button>Login</button>
          </div>
        </form>
        <div className="login-input-box">
          <button onClick={handleGoogleSignin}>Sign in with Google</button>
        </div>
        <div className="login-input-box" style={{ textAlign: "center" }}>
          <p>
            Don't have an account ?{" "}
            <span className="render-to-signup">
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
