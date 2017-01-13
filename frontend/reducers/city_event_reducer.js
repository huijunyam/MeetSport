import { REQUEST_EVENTS } from '../actions/event_actions';

const CityEventReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_EVENTS:
    // debugger
      return action.events;
    default:
      return state;
  }
};

export default CityEventReducer;
