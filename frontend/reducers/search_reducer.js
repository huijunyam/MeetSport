import { REQUEST_SEARCH_EVENTS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_SEARCH_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default SearchReducer;
