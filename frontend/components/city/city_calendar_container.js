import { connect } from 'react-redux';
import CityCalendar from './city_calendar';

const mapStateToProps = (state, ownProps) => {
  const events = state.cityDetail.events;
    // debugger
  return {
    events
  };
};

export default connect(mapStateToProps, null)(CityCalendar);
