import React from 'react';

class EventDetail extends React.Component {
  render() {
    const {eventDetail} = this.props;
    return (
      <div className="event-home-list">
        <div className="event-page col-last">
          <ul className="event-detail">
            <li className="event-detail-item-date"><strong>Date: </strong>{eventDetail.date}</li>
            <li className="event-detail-item-time"><strong>Start Time: </strong>{eventDetail.start_time}</li>
            <li className="event-detail-item-time"><strong>End Time: </strong>{eventDetail.end_time}</li>
            <li className="event-detail-item"><strong>Location: </strong>{eventDetail.location}</li>
            <li className="event-detail-item"><strong>City: </strong>{eventDetail.city.name}</li>
            <li className="event-detail-item"><strong>Sport Category: </strong>{eventDetail.category}</li>
            <li className="event-detail-item"><strong>Sport Level: </strong>{eventDetail.level}</li>
            <li className="event-detail-item"><strong>Number of Attendees: </strong>{eventDetail.attendees_num}</li>
            <li className="event-detail-item"><strong>Hosted by: </strong>{eventDetail.host.name}</li>
            <li className="event-detail-item"><strong>Description: </strong></li>
            <li className="event-detail-item">{eventDetail.description}</li>
          </ul>
        </div>
        <div className="aside-event-detail col-third">
          <h3>{`${eventDetail.attendings.length + 1} going`}</h3>
          <ul>
            <li><img src={eventDetail.host.profile_img} className="member-attending-img" /></li>
            {eventDetail.attendings.map(member =>(
              <li key={member.id}><img src={member.profile_img} className="member-attending-img"/></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default EventDetail;
