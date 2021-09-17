import React, { useState } from "react";
import "./chatBoxHeader.css";
import PhoneIcon from "@mui/icons-material/Phone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CloseIcon from "@mui/icons-material/Close";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ChatBoxHeader = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="chat-box-header">
      <div className="chat-box-header-left">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          className="chat-box-header-avatar"
          alt=""
        />
        <div className="chat-box-header-info">
          <h3>Joshua</h3>
          <span>Status: online</span>
        </div>
      </div>
      <div className="chat-box-header-right">
        <PhoneIcon className="chat-box-header-icon" />
        <VideoCallIcon className="chat-box-header-icon" />
        <CloseIcon
          className="chat-box-header-icon"
          onClick={() => setModal(!modal)}
        />
      </div>
      {modal && <ConfirmationModal setModal={setModal} />}
    </div>
  );
};

export default ChatBoxHeader;
