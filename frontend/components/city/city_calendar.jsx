import React from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';

class CityCalendar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      events: this.props.events,
      allDay: false,
      selectable: true,
      eventClick: (event) => {
        if (event.url) {
            this.props.router.push(`/event/${event.id}`);
            // return false;
        }
    }
    });
  }

  componentWillUnmount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div ref="calendar"></div>
    );
  }
}

export default withRouter(CityCalendar);
