import { FETCH_USER } from "./Types";
import axios from "axios";

export const fetchUser = (friend) => async (dispatch) => {
  try {
    const response = await axios.get(`api/user/${friend}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
