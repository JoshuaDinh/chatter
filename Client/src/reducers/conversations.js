import {
  FETCH_CONVERSATIONS,
  FETCH_SINGLE_CONVERSATION,
} from "../actions/Types";

const initialState = {
  conversations: [],
  singleConversation: [],
  isLoading: true,
};

const conversations = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CONVERSATIONS:
      return { ...state, conversations: payload, isLoading: false };
    case FETCH_SINGLE_CONVERSATION:
      return { ...state, conversations: payload, isLoading: false };
    default:
      return state;
  }
};

export default conversations;
