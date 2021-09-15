import React from "react";
import "./messenger.css";
import { connect } from "react-redux";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatMenu from "../../Components/ChatMenu/ChatMenu";
import Personal from "../../Components/Personal/Personal";
import Search from "../../Components/Search/Search";
import ChatBox from "../../Components/ChatBox/ChatBox";
import { FETCH_ALL_USERS } from "../../requests";
import { setToggleSearch } from "../../actions/toggleSearch";

const Messenger = ({ toggleSearch }) => {
  return (
    <div className="messenger">
      <Sidebar />
      <ChatMenu />
      {/* {toggleSearch && (
        <Search request={FETCH_ALL_USERS} exit={() => setToggleSearch()} />
      )} */}
      <ChatBox />
      <Personal />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    toggleSearch: state.toggleSearch.toggle,
  };
};

export default connect(mapStateToProps)(Messenger);
