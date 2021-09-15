import React, { useRef, useEffect } from "react";
import "./message.css";
import { format } from "timeago.js";
// import SearchIcon from "@material-ui/icons/Search";

const Message = ({ own, message }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef?.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={scrollRef} className={`message ${own && "own"} `}>
      <div className="message-container ">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          alt=""
          className="message-avatar"
        />
        <p className="message-text">{message?.text || message?.message}</p>{" "}
        <span className="message-timestamp own">
          {format(message.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default Message;
