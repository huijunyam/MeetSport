import { connect } from 'react-redux';
import CityEvent from './city_event';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityEvent = Object.keys(state.cityEvent).map(id => (state.cityEvent[id]));
  return {
    cityId, cityEvent
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: (cityId) => dispatch(fetchEvents(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEvent);
