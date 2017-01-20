import React from 'react';
import { Link } from 'react-router';

const CitySearchItem = ({ event }) => (
  <div className="city-search-detail-item">
    <Link to={`/event/${event.id}`} className="event-name">
      <h3 className="search-title"><strong>{event.name}</strong></h3>
    <ul className="city-search-detail">
      <li className="city-search-detail-list"><strong>Date: </strong>{event.date}</li>
      <li className="city-search-detail-list"><strong>Start Time: </strong>{event.start_time}</li>
      <li className="city-search-detail-list"><strong>Location: </strong>{event.location}</li>
      <li className="city-search-detail-list"><strong>Skill Level: </strong>{event.level}</li>
    </ul>
  </Link>
</div>
);

export default CitySearchItem;
