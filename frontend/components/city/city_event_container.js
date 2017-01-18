import { connect } from 'react-redux';
import CityEvent from './city_event';
import { fetchEvents, joinEvent, unjoinEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityEvent = Object.keys(state.cityEvent).map(id => (state.cityEvent[id]));
  const currentUser = state.session.currentUser;
  const isMember = checkMember(state.cities[cityId].members)
  debugger
  return {
    cityId, cityEvent, currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: (cityId) => dispatch(fetchEvents(cityId)),
  joinEvent: (attendee) => dispatch(joinEvent(attendee)),
  unjoinEvent: (id) => dispatch(unjoinEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEvent);
