import { FETCH_DISCOVER } from "../actions/Types";

const initialState = {
  accounts: [],
};

const discover = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DISCOVER:
      return { ...state, accounts: payload };
    default:
      return state;
  }
};

export default discover;
