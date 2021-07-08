import { SET_REGISTER_FORM } from "../actions/Types";

const initialState = {
  toggle: false,
};

const registerFormState = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_REGISTER_FORM:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default registerFormState;
