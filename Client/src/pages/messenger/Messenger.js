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

const Messenger = ({
  conversations,
  fetchConversations,
  fetchMessages,
  user,
  messages,
  addMessage,
}) => {
  const [chatId, setChatId] = useState(null);
  // const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const message = {
  //     sender: user._id,
  //     message: newMessage,
  //     conversationId: chatId,
  //   };

  //   const recieverId = conversations.members.find(
  //     (member) => member !== user._id
  //   );
  //   socket.current.emit("sendMessage", {
  //     senderId: user._id,
  //     recieverId: recieverId,
  //     message: newMessage,
  //   });
  //   addMessage(message);
  // };

  // Fetch Messages by onClick
  useEffect(() => {
    fetchMessages(chatId);
  }, [chatId, newMessage]);

  return (
    <div className="messenger">
      <ChatMenu />
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
          <ChatInput />
        </div>
      </div>
      <OnlineFriends />
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
  fetchMessages,
  addMessage,
})(Messenger);

// useEffect(() => {
//   socket.current = io("ws://localhost:8900");
//   socket.current.on("getMessage", (data) => {
//     setArrivalMessage({
//       sender: data.senderId,
//       message: data.message,
//       createdAt: Date.now(),
//     });
//   });
// }, []);

// useEffect(() => {
//   arrivalMessage && conversations?.members.includes(arrivalMessage.sender);
// }, arrivalMessage);

// useEffect(() => {
// emit to socket server - conditional: redux store causing user to show null after intialization, creating an additional socket id
//   if (user !== null) {
//     socket.current.emit("addUser", user?._id);
//     socket.current.on("getUsers", (users) => console.log(users));
//   }
// }, [user]);
