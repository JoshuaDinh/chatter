import React, { useState, useEffect } from "react";
import "./conversation.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentChat } from "../../actions/currentChat";

const Conversation = ({ chatId, setCurrentChat, friend, selectedChatId }) => {
  const [friendData, setFriendData] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const friendInfo = await axios.get(`api/user/${friend}`);
      const singleMessage = await axios.get(`api/messages/${chatId}`);
      setFriendData(friendInfo.data);
      // Retrieves array of all messages by conversationId - takes last message in array and saves it for display
      setMessageDisplay(
        singleMessage.data[singleMessage.data.length - 1]?.message
      );
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setCurrentChat(chatId);
  };

  const deleteChat = async (event) => {
    event.preventDefault();
    await axios.post(`/api/conversations/${chatId}`);
    setCurrentChat(null);
  };
  return (
    <div
      onClick={() => handleClick()}
      className={`conversation ${
        selectedChatId === chatId && "conversation-active"
      }`}
    >
      <img
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        alt=""
        className="conversation-avatar"
      />
      <div className="conversation-info">
        <span>{friendData.username}</span>
        <p>{messageDisplay}</p>
      </div>

      <button onClick={(event) => deleteChat(event)}>
        <DeleteForeverIcon className="conversation-delete-icon" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedChatId: state.currentChat.chatId };
};

export default connect(mapStateToProps, {
  setCurrentChat,
})(Conversation);
