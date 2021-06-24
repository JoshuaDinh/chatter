import React from "react";
import "./conversations.css";

const conversations = () => {
  return (
    <div className="conversations">
      <img
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg"
        alt=""
        className="conversations-avatar"
      />
      <div className="conversations-info">
        <span>Joshua Dinh</span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="conversations-new-message">
        <span>+</span>4
      </div>
    </div>
  );
};

export default conversations;
