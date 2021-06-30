import { SET_REGISTER_FORM } from "../actions/Types";

const initialState = false;

const registerFormState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_REGISTER_FORM:
      return !payload;
    default:
      return state;
  }
};

export default registerFormState;
