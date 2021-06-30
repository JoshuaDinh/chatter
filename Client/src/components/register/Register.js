import React from "react";
import "./register.css";
import { connect } from "react-redux";
import { setRegisterForm } from "../../actions/registerForm";
import { SET_REGISTER_FORM } from "../../actions/Types";

const Register = ({ setRegisterForm }) => {
  return (
    <form className="register-form">
      <h3 className="register-form-header">
        <span>Welcome!</span> please fill out the items below
      </h3>
      <div className="register-input-wrapper">
        <input className="register-input" type="text" placeholder="Username" />
        <input className="register-input" type="text" placeholder="Email" />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
        />
        <input
          className="register-input"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="register-policy">
        <input type="checkbox" />
        <p>I agreen to the Terms of Service & Privacy Policy</p>
      </div>
      <div className="register-button">SIGN UP</div>
      <div className="register-return-button" onClick={setRegisterForm}>
        Return to Login
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    registerForm: state.registerForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setRegisterForm: () => dispatch({ type: SET_REGISTER_FORM }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
