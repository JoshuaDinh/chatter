import React, { useEffect } from "react";
import "./conversations.css";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user";
import user from "../../reducers/user";

const Conversations = ({ conversation, currentUser, fetchUser, user }) => {
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    if (user !== null) {
      fetchUser(friendId);
    }
  }, [currentUser, conversation]);
  return (
    <div className="conversations">
      <img
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg"
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
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { fetchUser })(Conversations);
