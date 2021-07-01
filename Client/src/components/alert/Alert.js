import React from "react";
import "./alert.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => {
    return <div key={alert.id} className="alert"></div>;
  });

Alert.propTypes = { alerts: PropTypes.array.isRequired };

const mapStateToProps = (state) => {
  return {
    alerts: state.alert,
  };
};

export default connect(mapStateToProps)(Alert);
