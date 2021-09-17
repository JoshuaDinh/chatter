import React, { useEffect, useState, useRef } from "react";
import "./chatbox.css";
import ChatInput from "../../Components/ChatInput/ChatInput";
import Message from "../../Components/Message/Message";
import { connect } from "react-redux";
import ChatBoxHeader from "../ChatBoxHeader/ChatBoxHeader";
import { io } from "socket.io-client";
import axios from "axios";

const ChatBox = ({ authUser, selectedChatId }) => {
  const [messages, setMessages] = useState([]);

  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const messageResponse = await axios.get(`api/messages/${selectedChatId}`);
      setMessages(messageResponse.data);
    };

    if (selectedChatId) {
      fetchData();
    }
  }, [selectedChatId]);

  // useEffect(() => {
  //   socket.current = io("ws://localhost:8900");
  //   socket.current.on("getMessage", (data) =>
  //     setArrivalMessage({
  //       sender: data.sender,
  //       message: data.message,
  //       createdAt: Date.now(),
  //     })
  //   );
  // }, []);

  // useEffect(() => {
  //   arrivalMessage &&
  //     selectedChatId.members.includes(arrivalMessage.sender) &&
  //     setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage]);

  // useEffect(() => {
  //   socket.current.emit("addUser", authUser?._id);
  //   socket.current.on("getUsers", (socketUsers) => {
  //     console.log(socketUsers);
  //   });
  // }, [authUser]);

  return (
    <div className="chat-box">
      <div className="chat-box-wrapper">
        {/* Display only if conversation has been selected*/}
        {selectedChatId && <ChatBoxHeader />}
        {selectedChatId ? (
          <div className="chat-box-messages">
            {messages?.map((msg) => {
              return (
                <Message message={msg} own={msg.sender === authUser._id} />
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
        <ChatInput
          socket={socket}
          setMessages={setMessages}
          messages={messages}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
    selectedChatId: state.currentChat.chatId,
  };
};

export default connect(mapStateToProps, {})(ChatBox);
