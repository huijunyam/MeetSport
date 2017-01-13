import React from 'react';
import { Link } from 'react-router';
import EventListItem from './event_list_item';

class CityEvent extends React.Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.cityId);
  }

  render() {
    return (
      <ul className="city-event-list">
        {this.props.cityEvent.map(event => (
          <li key={event.id}><EventListItem cityId={this.props.cityId} event={event} /></li>
        ))}
      </ul>
    );
  }
}

export default CityEvent;
