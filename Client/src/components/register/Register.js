import React, { useState } from "react";
import "./register.css";
import Alert from "../Alert/Alert";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import { setRegisterForm } from "../../actions/registerForm";
import { setToggleTermsOfService } from "../../actions/toggleTermsOfService";

const Register = ({
  setRegisterForm,
  setToggleTermsOfService,
  setAlert,
  register,
  isAuthenticated,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // Destructure formData state
  const { username, email, password, password2 } = formData;

  // Update formData based off of name attributes on input fields
  const updateFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ username, email, password });
    }
  };

  // Redirect if succesful register
  if (isAuthenticated) {
    return <Redirect to="/messenger" />;
  }

  return (
    <form className="register-form" onSubmit={(e) => onSubmit(e)}>
      <Alert />
      <h3 className="register-form-header">
        <span>Welcome!</span> please fill out the items below
      </h3>
      <div className="register-input-wrapper">
        <input
          className="register-input"
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => updateFormData(e)}
          value={username}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => updateFormData(e)}
          value={email}
          required
        />
        <input
          className="register-input"
          type="new-password"
          placeholder="Password"
          name="password"
          onChange={(e) => updateFormData(e)}
          value={password}
          minLength="6"
        />
        <input
          className="register-input"
          type="confirm-password"
          placeholder="Confirm Password"
          name="password2"
          onChange={(e) => updateFormData(e)}
          value={password2}
          minLength="6"
        />
      </div>
      <div className="register-policy">
        <input type="checkbox" />
        <p>
          I agreen to the
          <span onClick={setToggleTermsOfService}>
            Terms of Service & Privacy Policy
          </span>
        </p>
      </div>
      <input className="register-button" type="submit" value="Sign Up" />
      <div className="register-return-button" onClick={setRegisterForm}>
        Already have an account?
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
    inAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  register,
  setAlert,
  setToggleTermsOfService,
  setRegisterForm,
})(Register);
