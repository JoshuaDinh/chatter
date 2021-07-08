import React from "react";
import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chat-online">
      <div className="chat-online-friend">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          className="chat-online-avatar"
          alt=""
        />
        <span>Joshua dinh</span> <div className="chat-online-badge"></div>
      </div>
    </div>
  );
};

export default ChatOnline;
