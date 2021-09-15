import React, { useState, useEffect } from "react";
import "./chatMenu.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Conversation from "../Conversation/Conversation";
import axios from "axios";
import { connect } from "react-redux";
import Friend from "../Friend/Friend";

const ChatMenu = ({ authUser }) => {
  const [conversations, setConversations] = useState([]);
  const [toggleChats, setToggleChats] = useState(true);
  const [toggleFriends, setToggleFriends] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`api/conversations/${authUser?._id}`);
      setConversations(response.data);
    };
    fetchData();
  }, [authUser]);

  // Switchs between displaying conversations and friends list
  const toggleChatMenu = () => {
    setToggleChats(true);
    setToggleFriends(false);
  };
  const toggleFriendMenu = () => {
    setToggleChats(false);
    setToggleFriends(true);
  };

  return (
    <div className="chat-menu">
      <div className="chat-menu-wrapper">
        <div className="chat-menu-header">
          <h1>Chats</h1>
          <div className="chat-menu-add-conversation">
            <AddIcon className="chat-menu-add-icon" />
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
        <div className="chat-menu-selection">
          <h3
            className={toggleChats && "activeColor"}
            onClick={() => toggleChatMenu()}
          >
            Chats
          </h3>
          <h3>|</h3>
          <h3
            className={toggleFriends && "activeColor"}
            onClick={() => toggleFriendMenu()}
          >
            Friends
          </h3>
        </div>
        {toggleChats &&
          conversations.map((c) => {
            return (
              <Conversation
                chatId={c._id}
                // Checks both members in chatId response - determines which user is auth & which is a friend
                friend={c.members.find((friend) => authUser?._id !== friend)}
                setConversations={setConversations}
                conversations={conversations}
              />
            );
          })}
        {toggleFriends &&
          authUser.friendsList.map((friend) => {
            return <Friend friend={friend} />;
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
