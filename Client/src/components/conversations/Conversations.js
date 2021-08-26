import React, { useEffect } from "react";
import "./conversations.css";
import { connect } from "react-redux";
import { setCurrentChat } from "../../actions/currentChat";
import { fetchUser } from "../../actions/user";
import { fetchMessages } from "../../actions/messages";

const Conversations = ({
  chatId,
  setCurrentChat,
  friend,
  user,
  fetchUser,
  messages,
  fetchMessages,
}) => {
  useEffect(() => {
    fetchUser(friend);
    // Get Message for each chatId - used to display last message on coversation component
    fetchMessages(chatId);
  }, []);

  return (
    <div onClick={() => setCurrentChat(chatId)} className="conversations">
      <img
        src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
        alt=""
        className="conversations-avatar"
      />
      <div className="conversations-info">
        <span>{user?.username}</span>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
      <div className="conversations-new-message">
        <span>+</span>
        {messages.length}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.users,
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps, {
  setCurrentChat,
  fetchUser,
  fetchMessages,
})(Conversations);
