import { FETCH_CONVERSATIONS } from "./Types";
import axios from "axios";

export const fetchConversations = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`api/conversations/${userId}`);
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
