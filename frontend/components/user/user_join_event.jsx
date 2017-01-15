import React from 'react';

const UserJoinEvent = ({event}) => (
  <li>
    <ul>
      <li>Name: {event.name}</li>
      <li>Date: {event.date}</li>
      <li>Sport Category: {event.category}</li>
      <li>Skill level: {event.level}</li>
    </ul>
  </li>
);

export default UserJoinEvent;
