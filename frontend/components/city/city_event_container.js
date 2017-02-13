import { connect } from 'react-redux';
import CityEvent from './city_event';
import { fetchEvents, joinEvent, unjoinEvent, clearEvents } from '../../actions/event_actions';
import { checkMember } from '../../reducers/selector';
import { joinCity } from '../../actions/city_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityEvent = Object.keys(state.cityEvent).map(id => (state.cityEvent[id]));
  const currentUser = state.session.currentUser;
  const cityDetail = state.cityDetail;
  const isMember = checkMember(cityDetail.members, currentUser);
  return {
    cityId, cityEvent, currentUser, cityDetail, isMember
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: (cityId) => dispatch(fetchEvents(cityId)),
  joinEvent: (attendee) => dispatch(joinEvent(attendee)),
  unjoinEvent: (id) => dispatch(unjoinEvent(id)),
  joinCity: (membership) => dispatch(joinCity(membership)),
  clearEvents: () => dispatch(clearEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEvent);
