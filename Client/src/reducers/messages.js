import { MESSAGES, POST_MESSAGE, MESSAGE } from "../actions/Types";

const initialState = {
  messages: [],
  message: "",
  addMessage: {},
};

const messages = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGES:
      return { ...state, messages: payload };
    case MESSAGE:
      return { ...state, message: payload };
    case POST_MESSAGE:
      return { ...state, postMessage: payload };
    default:
      return state;
  }
};

export default messages;
