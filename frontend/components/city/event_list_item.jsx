import React from 'react';
import { Link } from 'react-router';

const EventListItem = ({event, cityId}) => {
  return (
    <li className="city-event">
      <ul className="city-event-detail">
        <li><Link to={`/event/${event.id}`} >{event.name}</Link></li>
        <li>{event.host.name}</li>
        <li>{event.date}</li>
        <li>{event.start_time}</li>
        <li>
          <ul>
            {event.attendings.map(member =>(
              <li key={member.id}><img src={member.profile_img} className="member-attending-img"/></li>
            ))}
          </ul>
        </li>
        <li>{`${event.attendings.length + 1} going`}</li>
        <li>{event.description}</li>
      </ul>
    </li>
  );
};

export default EventListItem;
