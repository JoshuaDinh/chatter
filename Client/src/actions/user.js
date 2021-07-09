import { FETCH_USER } from "./Types";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER });
  } catch (err) {}
};
