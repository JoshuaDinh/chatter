import { CURRENT_CHAT } from "./Types";

export const setCurrentChat = (chatId) => (dispatch) => {
  dispatch({ type: CURRENT_CHAT, payload: chatId });
};
