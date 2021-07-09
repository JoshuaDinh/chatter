import { CURRENT_CHAT } from "../actions/Types";

const initialState = {
  chatId: "",
};

const currentChat = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_CHAT:
      return { ...state, chatId: payload };
    default:
      return state;
  }
};

export default currentChat;
