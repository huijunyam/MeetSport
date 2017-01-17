import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CityReducer from './city_reducer';
import CityDetailReducer from './city_detail_reducer';
import CityEventReducer from './city_event_reducer';
import EventDetailReducer from './event_detail_reducer';
import ErrorReducer from './error_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CityReducer,
  cityDetail: CityDetailReducer,
  cityEvent: CityEventReducer,
  eventDetail: EventDetailReducer,
  errors: ErrorReducer,
  userDetail: UserReducer,
  search: SearchReducer
});

export default RootReducer;
