import React from "react";
import "./message.css";
import SearchIcon from "@material-ui/icons/Search";

const Message = ({ own }) => {
  return (
    <div className={`message ${own && "own"} `}>
      <div className="message-container ">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          alt=""
          className="message-avatar"
        />
        <p className="message-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          <span className="message-timestamp own">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Message;
