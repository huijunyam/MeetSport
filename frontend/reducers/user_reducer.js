import { RECEIVE_USER, CLEAR_PROFILE } from '../actions/user_actions';

const defaultState = {
  id: -1,
  username: "",
  name: "",
  email: "",
  profile_img: "",
  cities: [],
  events: [],
  event_attendees: [],
  created_at: "",
  about_me: ""
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.userDetail;
    case CLEAR_PROFILE:
      return defaultState;
    default:
      return state;
  }
};

export default UserReducer;
