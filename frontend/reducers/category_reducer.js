import { REQUEST_CATEGORY } from '../actions/search_actions';

const defaultState = {
  name: "",
  events: []
};

const CategoryReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default CategoryReducer;
