import { TOGGLE_SEARCH } from "../actions/Types";

const initialState = {
  toggle: false,
};

const toggleSearch = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_SEARCH:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default toggleSearch;
