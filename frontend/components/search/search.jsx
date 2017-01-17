import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  render() {
    // debugger
    return (
      <ul className="search-list">
        {this.props.events.map((event, id) => (
          <li key={`event-${id}`} className="event-from-search">
            <Link to={`/event/${event.id}`}>
              <div className="search-container-items">
                <ul className="search-event-item">
                  <li className="search-event-header"><strong>{event.name}</strong></li>
                  <li className="search-event-detail"><strong>Date: </strong>{event.date}</li>
                  <li className="search-event-detail"><strong>Start Time: </strong>{event.start_time}</li>
                  <li className="search-event-detail"><strong>City: </strong>{event.city.name}</li>
                  <li className="search-event-detail"><strong>Location: </strong>{event.location}</li>
                  <li className="search-event-detail"><strong>Skill Level: </strong>{event.level}</li>
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Search;
