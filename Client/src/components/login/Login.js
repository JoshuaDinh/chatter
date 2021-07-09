import React, { useState } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setRegisterForm } from "../../actions/registerForm";
import { login } from "../../actions/auth";
import { PropTypes } from "prop-types";

const Login = ({ setRegisterForm, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // Update formData based off of name attributes on input fields
  const updateFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/messenger" />;
  }

  return (
    <form className="login-form" onSubmit={(e) => onSubmit(e)}>
      <h3 className="login-form-header">
        <span>Login</span> to your account
      </h3>
      <div className="login-input-wrapper">
        <input
          className="login-input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => updateFormData(e)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <h5 className="login-forgot-password">Forgot Password?</h5>{" "}
      <input className="login-button" type="submit" value="Sign In" />
      <div className="login-create-account-button" onClick={setRegisterForm}>
        Create Account
      </div>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    registerForm: state.registerForm.toggle,
  };
};

export default connect(mapStateToProps, { login, setRegisterForm })(Login);
