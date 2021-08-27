import React, { useEffect } from "react";
import "./conversation.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { connect } from "react-redux";
import { setCurrentChat } from "../../actions/currentChat";
import { fetchUser } from "../../actions/user";
import { fetchMessages } from "../../actions/messages";

const Conversation = ({
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
    <div onClick={() => setCurrentChat(chatId)} className="conversation">
      <img
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        alt=""
        className="conversation-avatar"
      />
      <div className="conversation-info">
        <span>{user?.username}</span>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
      {/* <div className="conversation-new-message">
        <span>+</span>
        {messages.length}
      </div> */}
      <DeleteForeverIcon className="conversation-delete-icon" />{" "}
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
})(Conversation);
