import { SET_ALERT, REMOVE_ALERT } from "./Types.js";
import { uuidv4 as v4 } from "uuid";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid.v4();
  dispatch({ type: SET_ALERT, payload: msg, alertType, id });
};
