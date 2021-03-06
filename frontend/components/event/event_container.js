import { connect } from 'react-redux';
import Event from './event';
import { fetchEvent, joinEvent, unjoinEvent } from '../../actions/event_actions';
import { checkAttendee, getAttendeeId, checkHost } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const eventId = parseInt(ownProps.params.eventId);
  const eventDetail = state.eventDetail;
  const currentUser = state.session.currentUser;
  const attendeeId = getAttendeeId(state, currentUser, eventId);
  const hasAttendance = checkAttendee(
    state.eventDetail.attendings, state.session.currentUser
  );
  const currentUserIsHost = checkHost(state.eventDetail.host, state.session.currentUser);
  // debugger
  return {
    eventId,
    eventDetail,
    currentUser,
    attendeeId,
    hasAttendance,
    currentUserIsHost
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  joinEvent: (attendee) => dispatch(joinEvent(attendee)),
  unjoinEvent: (id) => dispatch(unjoinEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
