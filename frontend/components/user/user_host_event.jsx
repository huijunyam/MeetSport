import React from 'react';

const UserHostEvent = ({event}) => (
  <li>
    <ul>
      <li>Name: {event.name}</li>
      <li>Date: {event.date}</li>
      <li>Location: {event.location}</li>
      <li>Sport Category: {event.category}</li>
      <li>Skill Level: {event.level}</li>
    </ul>
  </li>
);

export default UserHostEvent;
