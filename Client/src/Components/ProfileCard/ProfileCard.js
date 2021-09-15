import React from "react";
import "./profileCard.css";
import { connect } from "react-redux";
import axios from "axios";

const ProfileCard = ({ account, authUser }) => {
  const addFriend = async () => {
    const body = {
      userId: account._id,
    };
    try {
      await axios.put(`api/user/${authUser._id}/addFriend`, body);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="profile-card">
      <img
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        className="profile-card-avatar"
        alt=""
      />
      {/* need images */}
      <div className="profile-card-info">
        <h3>{account.username}</h3>
        <h4>{account.email}</h4>
        {/* need account phone number */}
      </div>
      <div
        aria="button"
        className="profile-card-add-container"
        onClick={() => addFriend()}
      >
        Add
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.user,
  };
};
export default connect(mapStateToProps, {})(ProfileCard);
