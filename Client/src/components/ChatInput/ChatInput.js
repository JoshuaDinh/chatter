import React from "react";
import "./chatInput.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { postMessage, setMessage } from "../../actions/messages";
import { connect } from "react-redux";

const ChatInput = ({
  setMessage,
  postMessage,
  message,
  selectedChatId,
  user,
  socket,
  conversations,
}) => {
  console.log(conversations);

  // const recieverId = conversations.find(
  //   conversatons === selectedChatId && console.log(recieverId)
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageBody = {
      conversationId: selectedChatId,
      sender: user._id,
      message: message,
    };
    socket.current.emit("sendMessage", {
      // recieverId,
      messageBody,
    });
    postMessage(messageBody);
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
    user: state.auth.user,
    selectedChatId: state.currentChat.chatId,
    message: state.messages.message,
    conversations: state.conversations.conversations,
  };
};

export default connect(mapStateToProps, { postMessage, setMessage })(ChatInput);
