import React from "react";
import { connect } from "react-redux";
import { setRegisterForm } from "../../actions/registerForm";
import { setToggleTermsOfService } from "../../actions/toggleTermsOfService";

const RegisterPolicy = ({ setRegisterForm, setToggleTermsOfService }) => {
  return (
    <>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  setToggleTermsOfService,
  setRegisterForm,
})(RegisterPolicy);
