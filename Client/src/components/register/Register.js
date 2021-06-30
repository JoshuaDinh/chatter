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
        <input className="register-input" type="text" placeholder="Password" />
        <input
          className="register-input"
          type="text"
          placeholder="Confirm Password"
        />
      </div>
      <button className="register-button">register</button>
      <div className="register-create-account-button" onClick={setRegisterForm}>
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
