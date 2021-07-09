import React, { useState, useEffect } from "react";
import "./messenger.css";
import Conversations from "../../components/conversations/Conversations";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Message from "../../components/message/Message";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { connect } from "react-redux";
import { fetchConversations } from "../../actions/conversations";

const Messenger = ({
  userId,
  fetchConversations,
  isAuthenticated,
  isLoading,
}) => {
  // Fecth conversations by userId after authenticated & finished loading
  useEffect(() => {
    if (isAuthenticated && isLoading === false) {
      fetchConversations();
    }
  }, [isAuthenticated]);
  return (
    <div className="messenger">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <form className="chat-menu-form">
            <SearchIcon className="icon" />
            <input
              type="text"
              placeholder="Search for friends"
              className="chat-menu-input"
            />
          </form>
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <Message />
            <Message />
            <Message own />
            <Message own />
            <Message />
            <Message />
            <Message />
            <Message own />
            <Message own />
            <Message />
          </div>
          <form className="chat-box-bottom">
            <AttachFileIcon className="icon" />
            <input
              placeholder="Say something.."
              className="chat-box-input"
              type="text"
            ></input>
            <InsertEmoticonIcon className="icon" />
            <MicIcon className="icon" />
            <div className="chat-box-submit-wrapper">
              <SendIcon className="chat-box-submit-button" />
            </div>
          </form>
        </div>
      </div>
      <div className="chat-online">
        <h2>Online friends</h2>
        <div className="chat-online-wrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.loading,
  };
};

export default connect(mapStateToProps, { fetchConversations })(Messenger);
