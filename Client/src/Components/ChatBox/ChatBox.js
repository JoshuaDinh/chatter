import React, { useEffect, useState, useRef } from "react";
import "./chatbox.css";
import ChatInput from "../../Components/ChatInput/ChatInput";
import Message from "../../Components/Message/Message";
import { connect } from "react-redux";
import { fetchConversations } from "../../actions/conversations";
import { fetchMessages } from "../../actions/messages";
// import ChatBoxHeader from "../ChatBoxHeader/ChatBoxHeader";
import { io } from "socket.io-client";

const ChatBox = ({ fetchMessages, user, messages, selectedChatId }) => {
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState("");

  useEffect(() => {
    fetchMessages(selectedChatId);
  }, [selectedChatId]);

  useEffect(() => {
    // socket.current = io("ws://localhost:8900");
    // socket.current.on("getMessage", (data) => console.log(data));
    // setArrivalMessage({
    //   sender: data.senderId,
    //   text: data.text,
    //   creqatedAt: Date.now(),
    // });
  }, []);

  // useEffect(() => {
  //   socket.current.emit("addUser", user?._id);
  //   socket.current.on("getUsers", (socketUsers) => {
  //     console.log(socketUsers);
  //   });
  // }, [user]);

  return (
    <div className="chat-box">
      <div className="chat-box-wrapper">
        {/* Display only if conversation has been */}
        {/* {selectedChatId && <ChatBoxHeader />} */}
        {selectedChatId ? (
          <div className="chat-box-messages">
            {messages?.map((msg) => {
              return (
                // <div ref={scrollRef}>
                <Message message={msg} own={msg.sender === user._id} />
                // </div>
              );
            })}
          </div>
        ) : (
          <div className="currentChat-null-wrapper">
            <span className="currentChat-null">
              Open a chat to start a conversation
            </span>
          </div>
        )}
        <ChatInput socket={socket} />
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
