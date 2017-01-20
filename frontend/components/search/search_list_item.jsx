import React from 'react';
import { Link } from 'react-router';

const SearchListItem = ({ event }) => (
  <li className="event-from-search">
    <div className="search-list-div">
      <Link to={`/event/${event.id}`}>
      <img className="search-img" src={event.category["image"]} />
      <h3 className="search-event-header"><strong>{event.name}</strong></h3>
      <div className="showDetail">
        <ul className="search-event-item">
          <li className="search-event-detail"><strong>Date: </strong>{event.date}</li>
          <li className="search-event-detail"><strong>Start Time: </strong>{event.start_time}</li>
          <li className="search-event-detail"><strong>City: </strong>{event.city.name}</li>
          <li className="search-event-detail"><strong>Skill Level: </strong>{event.level}</li>
        </ul>
      </div>
      </Link>
    </div>
  </li>
);


export default SearchListItem;
