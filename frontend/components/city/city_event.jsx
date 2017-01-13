import React from 'react';
import { Link } from 'react-router';
import EventListItem from './event_list_item';

class CityEvent extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchEvents(this.props.cityId);
  }

  render() {
    // debugger
    return (
      <ul className="city-event-list">
        {this.props.cityEvent.map(event => (
          <li key={event.id}><EventListItem event={event} /></li>
        ))}
      </ul>
    );
  }
}

export default CityEvent;
