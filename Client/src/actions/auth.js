import { REGISTER_SUCCESS, REGISTER_FAIL } from "./Types";
// import { setAlert } from "./alert";

// Register User
export const register = ({ username, email, password }) => async (dispatch) => {
  const newUser = { username, email, password };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  };
  try {
    const fetchData = await fetch("/api/user/register", requestOptions);
    const response = await fetchData.json();
    dispatch({ type: REGISTER_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};
