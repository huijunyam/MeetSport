import { REQUEST_EVENT } from '../actions/event_actions';

const defaultState = {
  id: -1,
  name: "",
  city: "",
  location: "",
  category: "",
  level: "",
  date: "",
  start_time: "",
  end_time: "",
  host: "",
  description: "",
  attendees_num: 0,
  attendings: [],
  attendees: []
};

const EventDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_EVENT:
      return action.eventDetail;
    default:
      return state;
  }
};

export default EventDetailReducer;
