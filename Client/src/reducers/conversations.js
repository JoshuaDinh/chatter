import { FETCH_CONVERSATIONS } from "../actions/Types";

const initialState = {
  conversations: [],
};

const conversations = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CONVERSATIONS:
      return { ...state, conversations: payload };
    default:
      return state;
  }
};

export default conversations;
