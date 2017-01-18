import { connect } from 'react-redux';
import CityCalendar from './city_calendar';
import { convertDateTime } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const events = state.cityDetail.events.map(event => ({
    id: event.id,
    title: event.name,
    start: convertDateTime(event.date, event.start_time),
    end: convertDateTime(event.date, event.end_time),
    url: `/#/event/${event.id}`
  }));
  return {
    events
  };
};

export default connect(mapStateToProps, null)(CityCalendar);
