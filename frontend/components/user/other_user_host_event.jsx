import React from 'react';
import { Link } from 'react-router';

const OtherUserHostEvent = ({event}) => (
  <li className="user-host-event-list">
    <ul>
      <li>Name: <Link to={`/event/${event.id}`}>{event.name}</Link></li>
      <li>Date: {event.date}</li>
      <li>Location: {event.location}</li>
      <li>Sport Category: {event.category.name}</li>
    </ul>
  </li>
);

export default OtherUserHostEvent;
