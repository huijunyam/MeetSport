import { connect } from 'react-redux';
import CityEvent from './city_event';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityEvent = state.cityEvent;
  return {
    cityId, cityEvent
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: (cityId) => dispatch(fetchEvents(cityId))
});

export default connect(mapStateToProps, null)(CityEvent);
