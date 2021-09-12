import React, { useState, useEffect } from "react";
import "./chatMenu.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Conversation from "../Conversation/Conversation";
import axios from "axios";
import { connect } from "react-redux";

const ChatMenu = ({ authUser }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`api/conversations/${authUser?._id}`);
      setConversations(response.data);
    };
    fetchData();
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
          return (
            <Conversation
              chatId={c._id}
              friend={c.members.find((friend) => authUser?._id !== friend)}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
  };
};

export default connect(mapStateToProps, {})(ChatMenu);
