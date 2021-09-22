import React from "react";
import "./confirmationModal.css";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentChat } from "../../actions/currentChat";

const ConfirmationModal = ({ setModal, chatId, setCurrentChat }) => {
  const deleteChat = async (event) => {
    event.preventDefault();
    await axios.post(`/api/conversations/${chatId}`);
    setCurrentChat(null);
    setModal(false);
  };

  return (
    <div className="confirmationModal">
      <h4>Are you sure you want to delete thread?</h4>
      {chatId}
      <div className="confirmationModal-button-container">
        <button onClick={(event) => deleteChat(event)}>Delete</button>
        <button onClick={() => setModal(false)}>Cancel</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { chatId: state.currentChat.chatId };
};

export default connect(mapStateToProps, {
  setCurrentChat,
})(ConfirmationModal);
