import React from 'react';

class EventDetail extends React.Component {
  render() {
    const {eventDetail} = this.props;
    return (
      <div className="event">
        <div className="event-detail-container">
          <ul className="event-detail">
            <li>{eventDetail.date}</li>
            <li>{eventDetail.start_time}</li>
            <li>{eventDetail.end_time}</li>
            <li>{eventDetail.location}</li>
            <li>{eventDetail.city.name}</li>
            <li>{eventDetail.category}</li>
            <li>{eventDetail.level}</li>
            <li>{eventDetail.attendees_num}</li>
            <li>{eventDetail.host.name}</li>
            <li>{eventDetail.description}</li>
          </ul>
        </div>
        <div className="aside-event-detail">
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
