import { FETCH_DISCOVER } from "./Types";
import axios from "axios";

export const fetchDiscover = () => async (dispatch) => {
  try {
    const response = await axios.get("api/user");
    dispatch({ type: FETCH_DISCOVER, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
