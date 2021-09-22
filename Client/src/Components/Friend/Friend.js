import React, { useState, useEffect } from "react";
import "./friend.css";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentChat } from "../../actions/currentChat";

const Friend = ({ friend, setCurrentChat, authUser }) => {
  const [friendData, setFriendData] = useState([]);
  const [conversationId, setConversationId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const friendInfo = await axios.get(`api/user/${friend}`);
      const response = await axios.get(`api/conversations/${friend}`);
      setConversationId(response.data[0]);
      setFriendData(friendInfo.data);
    };
    fetchData();
  }, []);

  const createNewChat = async () => {
    const body = {
      senderId: authUser._id,
      recieverId: friendData._id,
    };
    // Search for an existing conversationId by sender & reciever - creates a new one if none is found.
    if (conversationId) {
      setCurrentChat(conversationId._id);
      return;
    } else {
      const response = await axios.post("api/conversations", body);
      setCurrentChat(response.data._id);
    }
  };

  return (
    <div onClick={() => createNewChat()} className="friend">
      <img
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        alt=""
        className="friend-avatar"
      />
      <div className="friend-info">
        <span>{friendData.username}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
    selectedChatId: state.currentChat.chatId,
  };
};

export default connect(mapStateToProps, {
  setCurrentChat,
})(Friend);
