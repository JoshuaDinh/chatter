import { REGISTER_SUCCESS, REGISTER_FAIL } from "./Types";
import { setAlert } from "./alert";

// Register User
export const register = ({ username, email, password }) => async (dispatch) => {
  const newUser = { username, email, password };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  };
  try {
    const res = await fetch(
      "http://localhost:5500/api/user/register",
      requestOptions
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};
