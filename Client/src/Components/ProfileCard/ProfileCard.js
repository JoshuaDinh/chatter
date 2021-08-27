import React from "react";
import "./profileCard.css";
import AddIcon from "@material-ui/icons/Add";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        className="profile-card-avatar"
        alt=""
      />
      <div className="profile-card-info">
        <h3>Audrey Davenport</h3>
        <h4>AudreyDavenport@gmail.com</h4>
        <h5>619-977-3574</h5>
      </div>
      <div className="profile-card-add-container">
        <AddIcon className="profile-card-add-icon" />
      </div>
    </div>
  );
};

export default ProfileCard;
