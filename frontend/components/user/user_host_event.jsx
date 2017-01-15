import React from 'react';
import { Link } from 'react-router';

const UserHostEvent = ({event}) => (
  <li>
    <ul>
      <li>Name: <Link to={`/event/${event.id}`}>{event.name}</Link></li>
      <li>Date: {event.date}</li>
      <li>Location: {event.location}</li>
      <li>Sport Category: {event.category}</li>
      <li>Skill Level: {event.level}</li>
    </ul>
  </li>
);

export default UserHostEvent;
