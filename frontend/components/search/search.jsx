import React from 'react';
import { Link } from 'react-router';
import SearchListItem from './search_list_item';

class Search extends React.Component {
  render() {
    return (
      <ul className="search-list">
        {this.props.events.map((event, id) => (
          <SearchListItem event={event} key={`event-${id}`}/>
        ))}
      </ul>
    );
  }
}

export default Search;
