import { CURRENT_CHAT } from "./Types";

export const setCurrentChat = (selectedChat) => (dispatch) => {
  dispatch({ type: CURRENT_CHAT, payload: selectedChat });
};
