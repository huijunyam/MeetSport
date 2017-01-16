import React from 'react';
import { Link } from 'react-router';

class EventDetail extends React.Component {
  render() {
    const {eventDetail} = this.props;
    return (
      <div className="event-home-list">
        <div className="event-page col-last">
          <ul className="event-detail">
            <li className="event-detail-item"><img className="date-icon" src="http://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/Time-And-Date-Calendar-icon_sxggmh.png" /><strong>Date: </strong>{eventDetail.date}</li>
            <li className="event-detail-item"><img className="time-icon" src="http://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/42_hvqsub.png" /><strong>Start Time: </strong>{eventDetail.start_time}</li>
            <li className="event-detail-item"><img className="time-icon" src="http://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/42_hvqsub.png" /><strong>End Time: </strong>{eventDetail.end_time}</li>
            <li className="event-detail-item"><img className="location-icon" src="http://res.cloudinary.com/dirtnmtpc/image/upload/v1484560455/google-location-icon-16_fzuyro.png" /><strong>Location: </strong>{eventDetail.location}</li>
            <li className="event-detail-item-city"><strong>City: </strong>{eventDetail.city.name}</li>
            <li className="event-detail-item"><strong>Sport Category: </strong>{eventDetail.category}</li>
            <li className="event-detail-item"><strong>Sport Level: </strong>{eventDetail.level}</li>
            <li className="event-detail-item"><strong>Number of Attendees: </strong>{eventDetail.attendees_num}</li>
            <li className="event-detail-item"><strong>Hosted by: </strong>{eventDetail.host.name}</li>
            <li className="event-detail-item-description-header"><strong>Description: </strong></li>
            <li className="event-detail-item-description">{eventDetail.description}</li>
          </ul>
        </div>
        <div className="aside-event-detail col-third">
          <h3 className="num-attendees">{`${eventDetail.attendings.length + 1} going`}</h3>
          <ul>
            <li className="joining-member-list" key={eventDetail.host.id}>
              <div>{<img src={eventDetail.host.profile_img} className="member-attending-img"/>}</div>
              <Link to={`/users/show/${eventDetail.host.id}`}><h3 className="joining-member-name">{eventDetail.host.name}</h3></Link>
            </li>
            {eventDetail.attendings.map(member =>(
              <li className="joining-member-list" key={member.id}>
                <div>{<img src={member.profile_img} className="member-attending-img"/>}</div>
                <Link to={`/users/show/${member.id}`}><h3 className="joining-member-name">{member.name}</h3></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default EventDetail;
