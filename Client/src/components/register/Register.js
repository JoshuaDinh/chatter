import React, { useState } from "react";
import "./register.css";
import { connect } from "react-redux";
import { SET_REGISTER_FORM, SET_TERMS_OF_SERVICE } from "../../actions/Types";

const Register = ({ setRegisterForm, setTermsOfService }) => {
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
      console.log("npo match");
    } else {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        };
        const res = await fetch(
          "http://localhost:3000/api/user/register",
          requestOptions
        );
        console.log(res);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <form className="register-form" onSubmit={(e) => onSubmit(e)}>
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
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => updateFormData(e)}
          value={password}
          minLength="6"
        />
        <input
          className="register-input"
          type="password"
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
          <span onClick={setTermsOfService}>
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
    registerForm: state.registerForm,
    termsOfService: state.termsOfService,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRegisterForm: () => dispatch({ type: SET_REGISTER_FORM }),
    setTermsOfService: () => dispatch({ type: SET_TERMS_OF_SERVICE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
