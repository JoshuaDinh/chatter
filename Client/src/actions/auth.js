import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Types";
import { setAlert } from "./alert";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const response = await axios.get("/api/auth");
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

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
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;
    if (errors) {
      dispatch(setAlert(errors.error, "danger"));
    }
    console.log(errors.error);
    dispatch({ type: REGISTER_FAIL });
  }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const response = await axios.post("/api/auth", body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;
    if (errors) {
      dispatch(setAlert(errors.error, "danger"));
    }
    console.log(errors.error);
    dispatch({ type: LOGIN_FAIL });
  }
};

// Log User Out / Clear information

export const Logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
