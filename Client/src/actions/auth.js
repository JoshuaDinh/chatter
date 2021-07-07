import { REGISTER_SUCCESS, REGISTER_FAIL } from "./Types";
// import { setAlert } from "./alert";

// Register User
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(username, email, password),
  };
  try {
    const res = await fetch("http://localhost:5500/api/user/register", config);
    dispatch({ type: REGISTER_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};
