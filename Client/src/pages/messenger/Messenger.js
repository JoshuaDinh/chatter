import React, { useState, useEffect, useRef } from "react";
import "./messenger.css";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Message from "../../components/message/Message";

import { connect } from "react-redux";
import { fetchConversations } from "../../actions/conversations";
import { fetchMessages } from "../../actions/messages";
import { addMessage } from "../../actions/messages";
import { io } from "socket.io-client";
import OnlineFriends from "../../components/OnlineFriends/OnlineFriends";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChatMenu from "../../components/ChatMenu/ChatMenu";

const Messenger = ({ fetchMessages, user, messages, selectedChatId }) => {
  // const [chatId, setChatId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  // Fetch Messages by onClick
  useEffect(() => {
    fetchMessages(selectedChatId);
  }, [selectedChatId, newMessage]);

  return (
    <div className="messenger">
      <ChatMenu />
      <div className="chat-box">
        <div className="chat-box-wrapper">
          {selectedChatId ? (
            <div className="chat-box-top">
              {messages?.map((msg) => {
                return <Message message={msg} own={msg.sender === user._id} />;
              })}
            </div>
          ) : (
            <div className="currentChat-null-wrapper">
              <span className="currentChat-null">
                Open a chat to start a conversation
              </span>
            </div>
          )}
          <ChatInput />
        </div>
      </div>
      {/* <OnlineFriends /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    conversations: state.conversations.conversations,
    messages: state.messages.messages,
    selectedChatId: state.currentChat.chatId,
  };
};

export default connect(mapStateToProps, {
  fetchConversations,
  fetchMessages,
})(Messenger);
