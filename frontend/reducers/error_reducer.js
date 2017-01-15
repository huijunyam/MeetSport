import {
  RECEIVE_EVENT_ERRORS, CLEAR_ERROR, SEND_ERROR
} from '../actions/event_actions';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERROR:
      return null;
    case SEND_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default ErrorReducer;
