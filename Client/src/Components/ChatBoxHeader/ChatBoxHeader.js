import React, { useState, useEffect } from "react";
import "./chatBoxHeader.css";
import { connect } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CloseIcon from "@mui/icons-material/Close";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import axios from "axios";

const ChatBoxHeader = ({ selectedChatId, authUser }) => {
  const [modal, setModal] = useState(false);
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Searchs for conversation in db - will return all members in conversation
      const getConversation = await axios.get(
        ` /api/conversations/single/${selectedChatId}`
      );
      // Get user._id of other person in conversation
      const friend = getConversation.data?.members.find(
        (friend) => friend !== authUser._id
      );
      // Get user information by id
      const response = await axios.get(`api/user/${friend}`);
      setFriendData(response.data);
    };
    fetchData();
  }, [selectedChatId]);

  return (
    <div className="chat-box-header">
      <div className="chat-box-header-left">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
          className="chat-box-header-avatar"
          alt=""
        />
        <div className="chat-box-header-info">
          <h3>{friendData.username}</h3>
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

const mapStateToProps = (state) => {
  return {
    selectedChatId: state.currentChat.chatId,
    authUser: state.auth.user,
  };
};

export default connect(mapStateToProps, {})(ChatBoxHeader);
