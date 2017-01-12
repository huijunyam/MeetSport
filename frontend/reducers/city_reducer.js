import { REQUEST_CITIES, REQUEST_CITY,
         REMOVE_CITY } from '../actions/city_actions';
import merge from 'lodash/merge';

const CityReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case REQUEST_CITIES:
      return action.cities;
    case REQUEST_CITY:
      return merge(newState, { [action.city.id]: action.city });
    default:
      return state;
  }
};

export default CityReducer;
