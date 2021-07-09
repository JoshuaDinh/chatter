import axios from "axios";
import { MESSAGES } from "./Types";
import axios from "axios";

export const fetchMessages = () => async (dispatch) => {
  try {
    const response = await axios.get(`api/messages/${convoId}`);
    console.log(response.data);
    dispatch({ type: MESSAGES, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
