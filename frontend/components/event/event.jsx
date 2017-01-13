import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import EventDetail from './event_detail';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  handleClick(e) {
    e.preventDefault();
    const attendee = {
      event_id: this.props.eventId,
      attendee_id: this.props.currentUser.id
    };
    if (this.props.hasAttendance) {
      this.props.unjoinEvent(this.props.attendeeId.id);
    } else {
      this.props.joinEvent(attendee);
    }
  }

  render() {
    let rsvp = (this.props.hasAttendance) ? "Leave Event" : "Join Event";
    const { eventDetail } = this.props;
    return (
      <div>
        <HeaderContainer />
        <div className="sub-event-header">
          <h2>{eventDetail.name}</h2>
          <button onClick={this.handleClick} className="sub-city-header-button">{rsvp}</button>
        </div>
        <EventDetail eventDetail={eventDetail} />
        <FooterContainer />
      </div>
    );
  }
}

export default Event;
