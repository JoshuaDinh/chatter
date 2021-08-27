import React, { useEffect } from "react";
import "./chatbox.css";
import ChatInput from "../../Components/ChatInput/ChatInput";
import Message from "../../Components/Message/Message";
import { connect } from "react-redux";
import { fetchConversations } from "../../actions/conversations";
import { fetchMessages } from "../../actions/messages";

const ChatBox = ({ fetchMessages, user, messages, selectedChatId }) => {
  useEffect(() => {
    fetchMessages(selectedChatId);
  }, [selectedChatId]);

  return (
    <div className="chat-box">
      <div className="chat-box-wrapper">
        {selectedChatId ? (
          <div className="chat-box-messages">
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
})(ChatBox);
