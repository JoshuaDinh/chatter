import axios from "axios";
import { MESSAGES, ADD_MESSAGE } from "./Types";

export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    const response = await axios.get(`api/messages/${chatId}`);
    dispatch({ type: MESSAGES, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const addMessage = (message) => async (dispatch) => {
  try {
    const response = await axios.post("api/messages", message);
    dispatch({ type: ADD_MESSAGE, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
