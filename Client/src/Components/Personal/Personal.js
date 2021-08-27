import React from "react";
import "./personal.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { connect } from "react-redux";

const Personal = ({ authUser }) => {
  console.log(authUser);
  return (
    <div className="personal">
      <div className="personal-info">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          className="personal-avatar"
          alt=""
        />
        <h1>{authUser.username}</h1>
        <p>
          status: <span>Online</span>
        </p>
        <div className="personal-info-icons">
          <AccountCircleIcon className="personal-info-icon" />
          <EmojiEmotionsIcon className="personal-info-icon" />
          <SettingsIcon className="personal-info-icon" />
        </div>
      </div>

      <div className="personal-contact">
        <div className="personal-contact-item">
          <span>Phone:</span>
          {authUser.phone ? (
            <span>{authUser.phone}</span>
          ) : (
            <span>N/A</span>
          )}{" "}
        </div>
        <div className="personal-contact-item">
          <span>Email:</span>
          <span>{authUser.email}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
  };
};

export default connect(mapStateToProps)(Personal);
