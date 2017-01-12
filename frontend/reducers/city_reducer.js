import { REQUEST_CITIES,
         REMOVE_CITY } from '../actions/city_actions';
import merge from 'lodash/merge';

const CityReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export default CityReducer;
