import React from "react";
import "./login.css";
import { connect } from "react-redux";
import { setRegisterForm } from "../../actions/registerForm";
import { SET_REGISTER_FORM } from "../../actions/Types";

const Login = ({ setRegisterForm }) => {
  return (
    <form className="login-form">
      <h3 className="login-form-header">
        <span>Login</span> to your account
      </h3>
      <div className="login-input-wrapper">
        <input className="login-input" type="text" placeholder="Email" />
        <input className="login-input" type="text" placeholder="Password" />
      </div>
      <h5 className="login-forgot-password">Forgot Password?</h5>
      <button className="login-button">Login</button>
      <div className="login-create-account-button" onClick={setRegisterForm}>
        Create Account
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
