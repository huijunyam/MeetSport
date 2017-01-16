import React from 'react';
import { Link } from 'react-router';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {event} = this.props;
    let spot = "";
    if (event.attendees_num - (1 + event.attendings.length) > 1) {
      spot = "spots";
    } else {
      spot = "spot";
    }
    return (
      <div className="event-detail-container">
        <div className="city-event">
          <ul className="city-event-detail">
            <li><Link to={`/event/${event.id}`} className="event-name">{event.name}</Link></li>
            <li className="host-name"><strong>Hosted by:</strong> {event.host.name}</li>
            <li className="event-date"><strong>Date:</strong> {event.date}</li>
            <li className="event-start_time"><strong>Start Time:</strong> {event.start_time}</li>
          </ul>
          <div className="sub-event-detail">
            <li className="num-attendance"><strong>{`${event.attendings.length + 1}`}</strong> going</li>
            <li className="spot-left"><strong>{`${event.attendees_num - (event.attendings.length + 1)}`}</strong> {spot} left</li>
            <li><button className="event-detail-button"><Link to={`/event/${event.id}`} className="link-button">Event Detail</Link></button></li>
          </div>
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
