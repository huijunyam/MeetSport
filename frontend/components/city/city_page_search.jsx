import React from 'react';
import { Link } from 'react-router';
import CitySearchItem from './city_search_item';

class CityPageSearch extends React.Component {
  render() {
    return (
      <div className="search-city-container">
        <ul className="city-event-list-search">
          {this.props.events.map((event, id) => (
              <CitySearchItem event={event} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CityPageSearch;
