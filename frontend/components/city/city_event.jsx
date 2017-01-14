import React from 'react';
import { Link } from 'react-router';
import EventListItem from './event_list_item';

class CityEvent extends React.Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.cityId);
  }

  render() {
    return (
      <div>
        <h2 className="header-event">All Events</h2>
        <ul className="city-event-list">
          {this.props.cityEvent.map(event => (
            <EventListItem key={event.id} cityId={this.props.cityId} event={event} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CityEvent;
