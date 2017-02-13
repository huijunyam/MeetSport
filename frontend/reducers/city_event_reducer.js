import { REQUEST_EVENTS, CLEAR_EVENTS } from '../actions/event_actions';

const CityEventReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_EVENTS:
      return action.events;
    case CLEAR_EVENTS:
      return {};
    default:
      return state;
  }
};

export default CityEventReducer;
