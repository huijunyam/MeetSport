import {
  RECEIVE_EVENT_ERRORS, CLEAR_ERROR, SEND_ERROR
} from '../actions/event_actions';
import {
  RECEIVE_USER_ERROR, CLEAR_USER_ERROR
} from '../actions/user_actions';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERROR:
      return null;
    case SEND_ERROR:
      return action.error;
    case RECEIVE_USER_ERROR:
      return action.errors;
    case CLEAR_USER_ERROR:
      return null;
    default:
      return state;
  }
};

export default ErrorReducer;
