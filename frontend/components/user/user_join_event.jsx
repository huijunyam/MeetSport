import React from 'react';
import { Link } from 'react-router';

const UserJoinEvent = ({event}) => (
  <li className="user-join-event-list">
    <ul>
      <li key={`user-event-name-${event.id}`}>Name: <Link to={`/event/${event.id}`}>{event.name}</Link></li>
      <li key={`user-event-date-${event.id}`}>Date: {event.date}</li>
    </ul>
  </li>
);

export default UserJoinEvent;
