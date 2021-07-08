import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from "./Types";
import { setAlert } from "./alert";
import axios from "axios";

// Load User
export const loadUser = () => async (dispatch) => {};

// Register User
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });
  try {
    const response = await axios.post("/api/user/register", body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (err) {
    const errors = err.response.data;
    if (errors) {
      dispatch(setAlert(errors.error, "danger"));
    }
    console.log(errors.error);
    dispatch({ type: REGISTER_FAIL });
  }
};
