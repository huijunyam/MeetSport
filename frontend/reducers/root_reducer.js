import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CityReducer from './city_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CityReducer
});

export default RootReducer;
