import { FETCH_USER } from "./Types";
import axios from "axios";

export const fetchUser = (friendId) => async (dispatch) => {
  try {
    const response = await axios.get(`api/user/${friendId}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
