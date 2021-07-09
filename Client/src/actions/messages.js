import axios from "axios";
import { MESSAGES } from "./Types";

export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    const response = await axios.get(`api/messages/${chatId}`);
    dispatch({ type: MESSAGES, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
