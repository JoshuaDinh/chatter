import React, { useState, useEffect, useRef } from "react";
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
import { addMessage } from "../../actions/messages";
import { setCurrentChat } from "../../actions/currentChat";
import conversations from "../../reducers/conversations";
import AddIcon from "@material-ui/icons/Add";
import { io } from "socket.io-client";

const Messenger = ({
  conversations,
  fetchConversations,
  fetchMessages,
  user,
  messages,
  addMessage,
}) => {
  const [chatId, setChatId] = useState(null);
  const [socekt, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    // emit to socket server - conditional: redux store causing user to show null after intialization, creating an additional socket id
    if (user !== null) {
      socket.current.emit("addUser", user?._id);
      socket.current.on("getUsers", (users) => console.log(users));
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      message: newMessage,
      conversationId: chatId,
    };
    addMessage(message);
    console.log(chatId);
  };

  // Fecth conversations by userId after store is loaded userid !=null
  useEffect(() => {
    if (user !== null) {
      fetchConversations(user._id);
    }
  }, [user]);

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
                <Conversations conversation={c} currentUser={user} />;
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          {chatId ? (
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
          <form className="chat-box-bottom">
            <AttachFileIcon className="icon" />
            <input
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Say something.."
              className="chat-box-input"
              type="text"
            ></input>
            <InsertEmoticonIcon className="icon" />
            <MicIcon className="icon" />
            <div className="chat-box-submit-wrapper">
              <SendIcon
                className="chat-box-submit-button"
                onClick={handleSubmit}
              />
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
    user: state.auth.user,
    conversations: state.conversations.conversations,
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps, {
  fetchConversations,
  setCurrentChat,
  fetchMessages,
  addMessage,
})(Messenger);
