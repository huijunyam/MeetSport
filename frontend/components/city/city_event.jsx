import React from 'react';
import { Link } from 'react-router';
import EventListItem from './event_list_item';

class CityEvent extends React.Component {
  componentDidMount() {
    this.props.fetchEvents(this.props.cityId);
  }

  render() {
    // debugger
    return (
      <div>
        <h2 className="header-event">All Events</h2>
        <ul className="city-event-list">
          {this.props.cityEvent.map(event => (
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
