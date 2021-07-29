import React from "react";
import "./onlineFriends.css";

const OnlineFriends = () => {
  return (
    <div className="online-friends">
      <h2>Online friends</h2>
      <div className="online-friends-wrapper">
        <div className="online-friends-card">
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
            className="online-friend-avatar"
            alt=""
          />
          <span>Joshua dinh</span> <div className="online-friend-badge"></div>
        </div>
      </div>
    </div>
  );
};

export default OnlineFriends;
