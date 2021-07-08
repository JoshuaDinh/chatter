import { FETCH_CONVERSATIONS } from "../actions/Types";

const initialState = {
  conversations: [],
};

const conversations = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CONVERSATIONS:
      return { ...state, payload };
    default:
      return state;
  }
};

export default conversations;
