import React from 'react';
import { Link } from 'react-router';

const UserJoinEvent = ({event}) => (
  <li className="user-join-event-list">
    <ul>
      <li>Name: <Link to={`/event/${event.id}`}>{event.name}</Link></li>
      <li>Date: {event.date}</li>
    </ul>
  </li>
);

export default UserJoinEvent;
