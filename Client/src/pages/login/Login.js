import React from "react";
import "./login.css";
import loginImage from "../../images/loginImage.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="login-background">
        <div className="login-header">
          <h1> Welcome To Chatter</h1>
          <img src={loginImage} alt="" className="login-image" />
        </div>
      </div>
      <div className="login-form-wrapper">
        <h2>Hello!</h2>
        <h1>Lets get Chatting..</h1>
        {/* Form */}
        <form className="login-form">
          <h3 className="login-form-header">
            <span>Login</span> to your account
          </h3>
          <div className="login-input-wrapper">
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="text" placeholder="Password" />
          </div>
          <h5 className="login-forgot-password">Forgot Password?</h5>
          <button className="login-button">Login</button>
          <button className="login-create-account-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
