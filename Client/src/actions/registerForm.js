import { SET_REGISTER_FORM } from "./Types";

export const setRegisterForm = (state, dispatch) => {
  dispatch({ type: SET_REGISTER_FORM, payload: !state });
};
