import React, { useState, useEffect } from "react";
import "./chatInput.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { connect } from "react-redux";
import axios from "axios";

const ChatInput = ({
  selectedChatId,
  authUser,
  socket,
  messages,
  setMessages,
}) => {
  const [message, setMessage] = useState("");
  const [members, setMembers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const conversationMembersResponse = await axios.get(
  //       `api/conversations/single/${selectedChatId}`
  //     );
  //     setMembers(conversationMembersResponse.data.members);
  //   };

  //   fetchData();
  // }, [selectedChatId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageBody = {
      conversationId: selectedChatId,
      sender: authUser._id,
      message: message,
    };

    // const recieverId = members.find((friend) => authUser._id !== friend);
    // socket.current.emit("sendMessage", {
    //   recieverId,
    //   messageBody,
    // });
    try {
      const response = await axios.post("api/messages", messageBody);
      setMessages([...messages, messageBody]);
      // Clears input
      setMessage("");
    } catch (err) {}
  };

  return (
    <form
      className="chat-input-form"
      onSubmit={(e) => handleSubmit(e, message)}
    >
      <AttachFileIcon className="icon" />
      <input
        placeholder="Say something.."
        className="chat-input"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></input>
      <InsertEmoticonIcon className="icon" />
      <MicIcon className="icon" />
      <button
        type="submit"
        className="chat-input-submit-wrapper"
        onSubmit={() => handleSubmit}
      >
        <SendIcon className="chat-input-submit-button" />
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
    selectedChatId: state.currentChat.chatId,
  };
};

export default connect(mapStateToProps)(ChatInput);
