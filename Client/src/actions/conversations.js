import { FETCH_CONVERSATIONS, FETCH_SINGLE_CONVERSATION } from "./Types";
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

// export const fetchSingleConversation = (friendId) => async (dispatch) => {
//   try {
//     const response = await axios.get(`api/user/${friendId}`);
//     console.log(response.data);
//     dispatch({ type: FETCH_SINGLE_CONVERSATION, payload: response.data });
//   } catch (err) {
//     console.error(err);
//   }
// };
