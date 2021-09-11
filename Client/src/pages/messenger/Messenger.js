import React, { useState, useEffect } from "react";
import "./messenger.css";
import { connect } from "react-redux";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatMenu from "../../Components/ChatMenu/ChatMenu";
import Personal from "../../Components/Personal/Personal";
import Search from "../../Components/Search/Search";
import ChatBox from "../../Components/ChatBox/ChatBox";
import { io } from "socket.io-client";

const Messenger = ({ toggleSearch }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("ws://localhost:8900"));
  }, []);

  return (
    <div className="messenger">
      <Sidebar />
      <ChatMenu />
      {toggleSearch && <Search />}
      <ChatBox />
      <Personal />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    toggleSearch: state.toggleSearch.toggle,
  };
};

export default connect(mapStateToProps)(Messenger);
