import { RECEIVE_ERRORS, CLEAR_ERROR } from '../actions/event_actions';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
};

export default ErrorReducer;
