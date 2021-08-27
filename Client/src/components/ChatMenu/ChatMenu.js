import React, { useEffect } from "react";
import "./chatMenu.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Conversation from "../Conversation/Conversation";
import { connect } from "react-redux";
import { fetchConversations } from "../../actions/conversations";

const ChatMenu = ({ authUser, fetchConversations, conversations }) => {
  // Fecth conversations by userId after store is loaded userid !=null
  useEffect(() => {
    if (authUser !== null) {
      fetchConversations(authUser._id);
    }
  }, [authUser]);

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
            placeholder="Search Chats"
            className="chat-menu-input"
          />
        </form>
        {conversations.map((c) => {
          return <Conversation chatId={c._id} friend={c.members[1]} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
    conversations: state.conversations.conversations,
  };
};

export default connect(mapStateToProps, {
  fetchConversations,
})(ChatMenu);
