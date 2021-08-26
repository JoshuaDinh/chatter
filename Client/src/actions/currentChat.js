import { CURRENT_CHAT } from "./Types";

export const setCurrentChat = (currentChat) => (dispatch) => {
  dispatch({ type: CURRENT_CHAT, payload: currentChat });
};
