import { TOGGLE_SEARCH } from "./Types";

export const setToggleSearch = () => (dispatch) => {
  dispatch({ type: TOGGLE_SEARCH });
};
