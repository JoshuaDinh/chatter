import React from "react";
import "./navigation.css";
import { connect } from "react-redux";
import { Logout } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Navigation = ({ Logout, isAuthenticated }) => {
  // Redirect if user logs out
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="navigation">
      <h1>Chatter</h1>
      <div className="navigation-log-out" onClick={Logout}>
        Log out
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { Logout })(Navigation);
