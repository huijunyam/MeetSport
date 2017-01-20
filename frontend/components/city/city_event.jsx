import React from 'react';
import { Link } from 'react-router';
import EventListItem from './event_list_item';
import union from 'lodash/union';

class CityEvent extends React.Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.cityId);
  }

  render() {
    const events = union([], this.props.cityEvent);
    return (
      <div>
        <ul className="city-event-list">
          {events.reverse().map(event => (
            <li key={event.id}>
              <EventListItem key={event.id}
                isMember={this.props.isMember}
                currentUser={this.props.currentUser}
                joinCity={this.props.joinCity}
                cityId={this.props.cityId} event={event}
                fetchEvents={this.props.fetchEvents}
                joinEvent={this.props.joinEvent} unjoinEvent={this.props.unjoinEvent}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CityEvent;
