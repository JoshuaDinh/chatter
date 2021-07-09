import { CURRENT_CONVERSATION, FETCH_CONVERSATIONS } from "../actions/Types";

const initialState = {
  conversations: [],
  currentConversation: null,
  isLoading: true,
};

const conversations = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CONVERSATIONS:
      return { ...state, conversations: payload, isLoading: false };
    case CURRENT_CONVERSATION:
      return { ...state, conversations: payload, isLoading: false };
    default:
      return state;
  }
};

export default conversations;
