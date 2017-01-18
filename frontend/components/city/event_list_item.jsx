import React from 'react';
import { Link } from 'react-router';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkAttending = this.checkAttending.bind(this);
    this.rsvp = this.rsvp.bind(this);
    this.checkAttendeeId = this.checkAttendeeId.bind(this);
  }

  checkAttending() {
    for (let i = 0; i < this.props.event.attendings.length; i++){
      if (this.props.currentUser.username === this.props.event.attendings[i].username){
        return true;
      }
    }
    return false;
  }

  rsvp() {
    if (this.checkAttending() || this.props.currentUser.username === this.props.event.host.username) {
      return "Leave Event";
    } else {
      return "Join Event";
    }
  }

  checkAttendeeId() {
    for (let i = 0; i < this.props.event.attendees.length; i++){
      if (this.props.currentUser.id === this.props.event.attendees[i].attendee_id){
        return this.props.event.attendees[i].id;
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    const attendee = {
      event_id: this.props.event.id,
      attendee_id: this.props.currentUser.id
    };
    if (this.checkAttending()) {
      this.props.unjoinEvent(this.checkAttendeeId()).then(() => this.props.fetchEvents(this.props.cityId));
    } else {
      this.props.joinEvent(attendee).then(() => this.props.fetchEvents(this.props.cityId));
    }
  }

  // handleCity(e) {
  //   e.preventDefault();
  //   // debugger
  //   const membership = { member_id: this.props.currentUserId,
  //                        city_id: this.props.cityId };
  //   this.props.joinCity(membership).then(() => this.props.fetchEvents(this.props.cityId));
  // }

  render() {
    const {event} = this.props;
    let spot = "";
    if (event.attendees_num - (1 + event.attendings.length) > 1) {
      spot = "spots";
    } else {
      spot = "spot";
    }
    // debugger
    let joinbutton = "";
    if (this.props.currentUser !== null) {
      if (this.props.currentUser.username === this.props.event.host.username) {
        joinbutton = "Host";
      } else if (this.props.isMember === false) {
        joinbutton = "Join the City";
      } else if (this.checkAttending() === false && this.props.event.attendees_num === (1 + this.props.event.attendings.length)){
        joinbutton = "Full";
      } else {
        joinbutton = (<button onClick={this.handleClick}>{this.rsvp()}</button>);
      }
    } else{
      joinbutton = "";
    }
    // debugger
    return (
      <div className="event-detail-container">
        <div className="city-event">
          <ul className="city-event-detail">
            <li><Link to={`/event/${event.id}`} className="event-name">{event.name}</Link></li>
            <li className="host-name"><strong>Hosted by:</strong> {event.host.name}</li>
            <li className="event-date"><strong>Date:</strong> {event.date}</li>
            <li className="event-start_time"><strong>Start Time:</strong> {event.start_time}</li>
          </ul>
          <ul className="sub-event-detail">
              <li className="num-attendance"><strong>{`${event.attendings.length + 1}`}</strong> going</li>
              <li className="spot-left"><strong>{`${event.attendees_num - (event.attendings.length + 1)}`}</strong> {spot} left</li>
              <li>{joinbutton}</li>
              <li><button className="event-detail-button"><Link to={`/event/${event.id}`} className="link-button">Event Detail</Link></button></li>
          </ul>
        </div>
        <ul className="city-event-detail-attendance">
          <li className="wording-event-attendance"><strong>Attending:</strong></li>
          <li>
            <ul className="event-attendance">
              <li key={event.host.id}><Link to={`/users/show/${event.host.id}`}><img src={event.host.profile_img} className="member-attending-img"/></Link></li>
              {event.attendings.map(member =>(
                <li key={member.id}><Link to={`/users/show/${member.id}`}><img src={member.profile_img} className="member-attending-img"/></Link></li>
              ))}
            </ul>
          </li>
          <li className="event-description-header"><strong>Description:</strong></li>
          <li className="event-description">{event.description}</li>
        </ul>
      </div>
    );
  }
}

export default EventListItem;
