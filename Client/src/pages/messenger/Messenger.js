import React, { useEffect } from "react";
import "./messenger.css";
import Message from "../../Components/Message/Message";
import { connect } from "react-redux";
import { fetchConversations } from "../../actions/conversations";
import { fetchMessages } from "../../actions/messages";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatInput from "../../Components/ChatInput/ChatInput";
import ChatMenu from "../../Components/ChatMenu/ChatMenu";
import Personal from "../../Components/Personal/Personal";
import Search from "../../Components/Search/Search";

const Messenger = ({
  fetchMessages,
  user,
  messages,
  selectedChatId,
  toggleSearch,
}) => {
  useEffect(() => {
    fetchMessages(selectedChatId);
  }, [selectedChatId]);

  return (
    <div className="messenger">
      <Sidebar />
      <ChatMenu />
      {toggleSearch && <Search />}
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
      <Personal />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    conversations: state.conversations.conversations,
    messages: state.messages.messages,
    selectedChatId: state.currentChat.chatId,
    toggleSearch: state.toggleSearch.toggle,
  };
};

export default connect(mapStateToProps, {
  fetchConversations,
  fetchMessages,
})(Messenger);
