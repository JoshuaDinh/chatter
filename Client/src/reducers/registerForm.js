import { SET_REGISTER_FORM } from "../actions/Types";

const registerFormState = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case SET_REGISTER_FORM:
      return !state;
    default:
      return state;
  }
};

export default registerFormState;
