import { REQUEST_CITY } from '../actions/city_actions';

const defaultState = {
  id: -1,
  name: "",
  members: [],
  background_image_url: "",
  memberships: [],
  events: []
};

const CityDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case REQUEST_CITY:
      return action.cityDetail;
    default:
      return state;
  }
};

export default CityDetailReducer;
