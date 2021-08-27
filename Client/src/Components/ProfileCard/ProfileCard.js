import React from "react";
import "./profileCard.css";
import AddIcon from "@material-ui/icons/Add";

const ProfileCard = ({ account }) => {
  return (
    <div className="profile-card">
      <img
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        className="profile-card-avatar"
        alt=""
      />
      {/* need images */}
      <div className="profile-card-info">
        <h3>{account.username}</h3>
        <h4>{account.email}</h4>
        {/* need account phone number */}
      </div>
      <div className="profile-card-add-container">
        <AddIcon className="profile-card-add-icon" />
      </div>
    </div>
  );
};

export default ProfileCard;
