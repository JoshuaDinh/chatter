import { TOGGLE_TERMS_OF_SERVICE } from "./Types";

export const setToggleTermsOfService = () => (dispatch) => {
  dispatch({ type: TOGGLE_TERMS_OF_SERVICE });
};
