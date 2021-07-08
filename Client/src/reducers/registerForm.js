import { SET_REGISTER_FORM } from "../actions/Types";

const initialState = {
  toggleRegisterForm: false,
};

const registerFormState = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_REGISTER_FORM:
      return { ...state, toggleRegisterForm: !state.toggleRegisterForm };
    default:
      return state;
  }
};

export default registerFormState;
