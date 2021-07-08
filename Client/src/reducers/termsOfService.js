import { SET_TERMS_OF_SERVICE } from "../actions/Types";

const initialState = {
  toggle: false,
};
const termsOfServiceState = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_TERMS_OF_SERVICE:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default termsOfServiceState;
