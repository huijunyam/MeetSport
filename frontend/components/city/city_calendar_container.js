import { connect } from 'react-redux';
import CityCalendar from './city_calendar';

const mapStateToProps = state => ({
  events: state.cityDetail.events
});

export default connect(mapStateToProps, null)(CityCalendar);
