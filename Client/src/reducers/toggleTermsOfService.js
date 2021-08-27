import { TOGGLE_TERMS_OF_SERVICE } from "../actions/Types";

const initialState = {
  toggle: false,
};

const toggleTermsOfService = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_TERMS_OF_SERVICE:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default toggleTermsOfService;
