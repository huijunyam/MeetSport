import React from 'react';
import { Link } from 'react-router';

class EventDetail extends React.Component {
  render() {
    const {eventDetail} = this.props;
    let spot = "";
    if (eventDetail.attendees_num - (1 + eventDetail.attendings.length) > 1) {
      spot = "spots";
    } else {
      spot = "spot";
    }

    return (
      <div className="event-home-list">
        <div className="event-page col-last">
          <ul className="event-detail">
            <li className="event-detail-item"><img className="date-icon" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/Time-And-Date-Calendar-icon_sxggmh.png" /><strong>Date: </strong>{eventDetail.date}</li>
            <li className="event-detail-item"><img className="time-icon" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/42_hvqsub.png" /><strong>Start Time: </strong>{eventDetail.start_time}</li>
            <li className="event-detail-item"><img className="time-icon" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/42_hvqsub.png" /><strong>End Time: </strong>{eventDetail.end_time}</li>
            <li className="event-detail-item"><img className="location-icon" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/google-location-icon-16_fzuyro.png" /><strong>Location: </strong>{eventDetail.location}</li>
            <li className="event-detail-item-city"><img className="city-icon" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484821524/cartoon-city-skyline-black-buildings_214131_fefbkx.png" /><strong>City: </strong><Link to={`/city/${eventDetail.city.id}/event`}>{eventDetail.city.name}</Link></li>
            <li className="event-detail-item"><strong>Sport Category: </strong>{eventDetail.category.name}</li>
            <li className="event-detail-item"><strong>Sport Level: </strong>{eventDetail.level}</li>
            <li className="event-detail-item"><strong>Number of Attendees: </strong>{eventDetail.attendees_num}</li>
            <li className="event-detail-item-host"><strong>Hosted by: </strong><Link to={`/users/show/${eventDetail.host.id}`}>{eventDetail.host.name}</Link></li>
            <li className="event-detail-item-description-header"><strong>Description: </strong></li>
            <li className="event-detail-item-description">{eventDetail.description}</li>
          </ul>
        </div>
        <div className="aside-event-detail col-third">
          <h3 className="num-attendees">{`${eventDetail.attendings.length + 1} going`}</h3>
          <h3 className="num-spot-left">{`${eventDetail.attendees_num - (eventDetail.attendings.length + 1)}`} {spot} left</h3>
          <ul>
            <li className="joining-member-list" key={eventDetail.host.id}>
              <div><Link to={`/users/show/${eventDetail.host.id}`}>{<img src={eventDetail.host.profile_img} className="member-attending-img"/>}</Link></div>
              <Link to={`/users/show/${eventDetail.host.id}`}><h3 className="joining-member-name">{eventDetail.host.name}</h3></Link>
            </li>
            {eventDetail.attendings.map(member =>(
              <li className="joining-member-list" key={member.id}>
                <div><Link to={`/users/show/${member.id}`}>{<img src={member.profile_img} className="member-attending-img"/>}</Link></div>
                <Link to={`/users/show/${member.id}`}><h3 className="joining-member-name">{member.name}</h3></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default EventDetail;
