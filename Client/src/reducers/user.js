import { FETCH_USER } from "../actions/Types";

const initialState = {
  users: [],
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return { ...state, users: [state.users, payload] };
    default:
      return state;
  }
};

export default user;
