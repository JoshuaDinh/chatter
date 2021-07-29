import React, { useEffect } from "react";
import "./chatMenu.css";
import Conversations from "../ChatMenu/ChatMenu";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { setCurrentChat } from "../../actions/currentChat";

const ChatMenu = ({ user, fetchConversations }) => {
  // Fecth conversations by userId after store is loaded userid !=null
  useEffect(() => {
    if (user !== null) {
      fetchConversations(user._id);
    }
  }, [user]);
  return (
    <div className="chat-menu">
      <div className="chat-menu-wrapper">
        <div className="chat-menu-header">
          <h2>Chat's</h2>
          <div className="chat-menu-add-conversation">
            <AddIcon className="chat-menu-add-icon " />
          </div>
        </div>
        <form className="chat-menu-form">
          <SearchIcon className="icon" />
          <input
            type="text"
            placeholder="Search for friends"
            className="chat-menu-input"
          />
        </form>
        {/* {conversations.map((c) => {
          return (
            <div onClick={() => setChatId(c._id)}>
              <Conversations conversation={c} currentUser={user} />;
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    conversations: state.conversations.conversations,
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps, {
  setCurrentChat,
})(ChatMenu);
