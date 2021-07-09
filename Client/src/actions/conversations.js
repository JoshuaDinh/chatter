import { FETCH_CONVERSATIONS } from "./Types";
import axios from "axios";

export const fetchConversations = () => async (dispatch, getState) => {
  const userId = getState().auth.user._id;
  try {
    const response = await axios.get(`api/conversations/${userId}`);
    console.log(response.data);
    dispatch({ type: FETCH_CONVERSATIONS, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
