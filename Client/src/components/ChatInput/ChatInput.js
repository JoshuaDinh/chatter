import React from "react";
import "./chatInput.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import { connect } from "react-redux";

const ChatInput = ({ user, conversation, messages }) => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const message = {
  //       sender: user._id,
  //       message: newMessage,
  //       conversationId: chatId,
  //     };
  //   };

  return (
    <form className="chat-input-form">
      <AttachFileIcon className="icon" />
      <input
        // onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Say something.."
        className="chat-input"
        type="text"
      ></input>
      <InsertEmoticonIcon className="icon" />
      <MicIcon className="icon" />
      <div className="chat-input-submit-wrapper">
        <SendIcon className="chat-input-submit-button" />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    conversations: state.conversations.conversations,
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps)(ChatInput);
