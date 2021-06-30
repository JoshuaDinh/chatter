import { SET_TERMS_OF_SERVICE } from "../actions/Types";

const termsOfServiceState = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case SET_TERMS_OF_SERVICE:
      return !state;
    default:
      return state;
  }
};

export default termsOfServiceState;
