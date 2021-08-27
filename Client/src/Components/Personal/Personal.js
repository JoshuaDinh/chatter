import React from "react";
import "./personal.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
const Personal = () => {
  return (
    <div className="personal">
      <div className="personal-info">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          className="personal-avatar"
          alt=""
        />
        <h1>Joshua D.</h1>
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
          <span>619-977-3574</span>
        </div>
        <div className="personal-contact-item">
          <span>Email:</span>
          <span>josh@joshuadinh.tech </span>
        </div>
      </div>
    </div>
  );
};

export default Personal;
