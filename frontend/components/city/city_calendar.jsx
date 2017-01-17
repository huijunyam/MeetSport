import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class CityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.eventArray = this.eventArray.bind(this);
    // this.convertDay = this.convertDay.bind(this);
  }

  redirect(event) {
    this.props.router.push(`/event/${event.id}`);
  }

  // convertDateTime(date, time) {
  //   let date = date.split("/");
  //   let year = date.pop();
  //   date.unshift(year);
  //   date = date.map(el => parseInt(el));
  //   let time = time.split(" ");
  //   let hour = time[0].split(".").map(el => parseInt(el));
  //   if (time[1] === "PM") {
  //     date.push(hour[0] + 12);
  //     date.push(hour[1]);
  //   } else {
  //     date.push(hour[0]);
  //     date.push(hour[1]);
  //   }
  //   return date;
  // }

  // convertDay(date) {
  //   let dateArr = date.split("/");
  //   let year = dateArr.pop();
  //   dateArr.unshift(year);
  //   dateArr = dateArr.map(el => parseInt(el));
  //   return moment(dateArr).add(1, 'd');
  // }

  eventArray() {
    return (this.props.events.map(event => ({
      id: event.id,
      name: event.name,
      startDate: new Date(event.date),
      endDate: new Date(event.date)
    }))
  );
  }

  render() {
    const event = this.eventArray();
    // debugger
    return (
      <BigCalendar
        selectable
        defaultView='month'
        events={event}
        titleAccessor='name'
        startAccessor='startDate'
        endAccessor='endDate'
        onSelectEvent={event => this.redirect(event) }
    />
    );
  }
}


export default CityCalendar;
