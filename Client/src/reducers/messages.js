import { MESSAGES } from "../actions/Types";

const initialState = {
  messages: [],
};

const messages = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGES:
      return { ...state, payload };
    default:
      return state;
  }
};

export default messages;
