import { MESSAGES, ADD_MESSAGE } from "../actions/Types";

const initialState = {
  messages: [],
  addMessage: "",
};

const messages = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGES:
      return { ...state, messages: payload };
    case ADD_MESSAGE:
      return { ...state, messages: payload };
    default:
      return state;
  }
};

export default messages;
