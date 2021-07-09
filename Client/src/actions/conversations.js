import { FETCH_CONVERSATIONS } from "./Types";
import axios from "axios";

export const fetchConversations = (userId) => async (dispatch) => {
  try {
    if (userId !== null) {
      const response = await axios.get(`api/conversations/${userId}`);
      console.log(response.data);
      dispatch({ type: FETCH_CONVERSATIONS, payload: response.data });
    }
  } catch (err) {
    console.error(err);
  }
};
