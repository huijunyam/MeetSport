import React from 'react';
import { Link } from 'react-router';

const UserJoinEvent = ({event}) => (
  <li>
    <ul>
      <li>Name: <Link to={`/event/${event.id}`}>{event.name}</Link></li>
      <li>Date: {event.date}</li>
      <li>Sport Category: {event.category}</li>
      <li>Skill level: {event.level}</li>
    </ul>
  </li>
);

export default UserJoinEvent;
