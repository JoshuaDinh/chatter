import React from "react";
import "./home.css";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import TermsOfService from "../../components/TermsOfService/TermsOfService";
import homeImage from "../../images/homeImage.svg";
import { connect } from "react-redux";
import { setRegisterForm } from "../../actions/registerForm";

const Home = ({ registerForm, termsOfService }) => {
  return (
    <div className="home">
      <div className="home-background">
        <div className="home-header">
          <h1> Welcome To Chatter</h1>
          <img src={homeImage} alt="" className="home-image" />
        </div>
      </div>
      <div className="home-form-wrapper">
        <h2>Hello!</h2>
        <div className="home-animation-wrapper">
          <h1>Lets get Chatting</h1>
          <span className="home-dot-animation">.</span>
          <span className="home-dot-animation">.</span>
          <span className="home-dot-animation">.</span>
        </div>
        {registerForm ? <Register /> : <Login />}
        {termsOfService === true && <TermsOfService />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerForm: state.registerForm.toggle,
    termsOfService: state.termsOfService.toggle,
  };
};

export default connect(mapStateToProps)(Home);
