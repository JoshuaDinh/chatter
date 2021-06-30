import React, { useState, useEffect } from "react";
import "./register.css";

const Register = () => {
  return (
    <form className="register-form">
      <h3 className="register-form-header">
        <span>Welcome!</span> please fill out the items below
      </h3>
      <div className="register-input-wrapper">
        <input className="register-input" type="text" placeholder="Username" />
        <input className="register-input" type="text" placeholder="Email" />
        <input className="register-input" type="text" placeholder="Password" />
        <input
          className="register-input"
          type="text"
          placeholder="Confirm Password"
        />
      </div>
      <button className="register-button">register</button>
    </form>
  );
};

export default Register;
