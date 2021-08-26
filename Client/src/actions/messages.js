import axios from "axios";
import { MESSAGES, POST_MESSAGE, MESSAGE } from "./Types";

export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    const response = await axios.get(`api/messages/${chatId}`);
    dispatch({ type: MESSAGES, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const setMessage = (message) => (dispatch) =>
  dispatch({ type: MESSAGE, payload: message });

export const postMessage = (messageBody) => async (dispatch) => {
  try {
    const response = await axios.post("api/messages", messageBody);
    dispatch({ type: POST_MESSAGE, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
