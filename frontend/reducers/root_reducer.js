import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CityReducer from './city_reducer';
import CityDetailReducer from './city_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CityReducer,
  cityDetail: CityDetailReducer
});

export default RootReducer;
