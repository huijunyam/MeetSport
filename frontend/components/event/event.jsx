import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import EventDetail from './event_detail';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.rsvp = this.rsvp.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  handleButton() {
    if (this.props.currentUserIsHost) {
      return (<div className="event-host-button">Event Host</div>);
    } else if (this.props.hasAttendance === false && this.props.eventDetail.attendees_num === (1 + this.props.eventDetail.attendings.length)){
      return (<div className="event-full-button">Event Full</div>);
    } else {
      return (<button onClick={this.handleClick} className="sub-event-header-button">{this.rsvp()}</button>);
    }
  }

  rsvp() {
    if (this.props.hasAttendance || this.props.currentUserIsHost) {
      return "Leave Event";
    } else {
      return "Join Event";
    }
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
    const { eventDetail } = this.props;
    return (
      <div className="align-footer">
        <div>
          <HeaderContainer />
          <div className="sub-event-header">
            <h2>{eventDetail.name}</h2>
            {this.handleButton()}
          </div>
          <EventDetail eventDetail={eventDetail} />
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default Event;
