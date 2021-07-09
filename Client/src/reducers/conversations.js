import { FETCH_CONVERSATIONS } from "../actions/Types";

const initialState = {
  conversations: [],
  isLoading: true,
};

const conversations = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CONVERSATIONS:
      return { ...state, conversations: payload, isLoading: false };
    default:
      return state;
  }
};

export default conversations;
