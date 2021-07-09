import React, { useState, useEffect } from "react";
import "./conversations.css";
import { connect } from "react-redux";
// import { fetchUser } from "../../actions/user";
import axios from "axios";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState("");

  // Get user based on mapped userid from Messages Page
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    const getUser = async () => {
      try {
        const response = await axios.get(`/api/user/${friendId}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversations">
      <img
        src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
        alt=""
        className="conversations-avatar"
      />
      <div className="conversations-info">
        <span>{user?.username}</span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="conversations-new-message">
        <span>+</span>4
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Conversations);
