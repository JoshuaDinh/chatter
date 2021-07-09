import { FETCH_USER } from "../actions/Types";

const initialState = {
  user: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default user;
