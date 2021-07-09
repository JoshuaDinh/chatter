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
import { fetchMessages } from "../../actions/messages";
import { setCurrentChat } from "../../actions/currentChat";
import conversations from "../../reducers/conversations";
import AddIcon from "@material-ui/icons/Add";

const Messenger = ({
  conversations,
  fetchConversations,
  fetchMessages,
  userId,
  messages,
}) => {
  const [chatId, setChatId] = useState(null);
  // Fecth conversations by userId after store is loaded userid !=null
  useEffect(() => {
    if (userId !== null) {
      fetchConversations(userId._id);
    }
  }, [userId]);

  // Fetch Messages by onClick
  useEffect(() => {
    fetchMessages(chatId);
  }, [chatId]);
  console.log(messages);

  return (
    <div className="messenger">
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
          {conversations.map((c) => {
            return (
              <div onClick={() => setChatId(c._id)}>
                <Conversations conversation={c} currentUser={userId} />;
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          {chatId ? (
            <div className="chat-box-top">
              {messages.map((msg) => {
                return <Message />;
              })}
            </div>
          ) : (
            <div className="currentChat-null-wrapper">
              <span className="currentChat-null">
                Open a chat to start a conversation
              </span>
            </div>
          )}
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
    conversations: state.conversations.conversations,
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps, {
  fetchConversations,
  setCurrentChat,
  fetchMessages,
})(Messenger);
