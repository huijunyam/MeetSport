import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city_id: this.props.cityId,
      name: "",
      location: "",
      category: "",
      description: "",
      start_time: "",
      end_time: "",
      date: "",
      level: "",
      attendees_num: "",
      host_id: this.props.currentUser.id
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  sportCategory() {
    return ["air sports", "archery", "basketball",
                "bat and ball", "board sports", "climbing", "cycling",
                "combat sports", "cue sports", "equine sports", "fishing",
                "football", "flying disc sports", "golf", "gymnastics",
                "handball", "ice sports", "kite sports", "mixed discipline",
                "racquet sports", "running", "sailing", "snow sports",
                "shooting sports", "water sports", "hiking"];
  }

  skillLevel() {
    return ["All", "Beginner", "Intermediate", "Advance", "Expert"];
  }

  componentDidMount() {
    this.props.clearError();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  checkTimeErr(start, end) {
    let startTime = start.toLowerCase().split(" ").join("");
    let endTime = end.toLowerCase().split(" ").join("");
    let startstr = "";
    let endstr = "";
    if (startTime.indexOf("a") !== -1) {
      startstr = "h:mma";
    } else {
      startstr = "h:mmA";
    }
    if (endTime.indexOf("a") !== -1) {
      endstr = "h:mma";
    } else {
      endstr = "h:mmA";
    }
    let begin = moment(startTime, startstr);
    let ending = moment(endTime, endstr);
    return begin.isBefore(ending);
  }

  handleDateTime(field, value) {
    if (field === "date") {
      let target = value;
      target = target.split("-");
      target.push(target.shift());
      target = target.join("/");
      return target;
    }
    else if (field === "time") {
      let target = value;
      target = target.split(":");
      if (parseInt(target[0]) === 12) {
        target = target.join(":") + " PM";
        return target;
      } else if (parseInt(target[0]) > 12) {
        target = `${(target[0] - 12)}` + ":" + target[1] + " PM";
        return target;
      } else if (parseInt(target[0]) < 10) {
        target = `${parseInt(target[0])}` + ":" + target[1] + " AM";
        return target;
      } else {
        target = target.join(":") + " AM";
        return target;
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = {
      city_id: this.props.cityId,
      name: this.state.name,
      location: this.state.location,
      category: this.state.category,
      description: this.state.description,
      start_time: this.handleDateTime("time", this.state.start_time),
      end_time: this.handleDateTime("time", this.state.end_time),
      date: this.handleDateTime("date", this.state.date),
      level: this.state.level,
      attendees_num: this.state.attendees_num,
      host_id: this.props.currentUser.id
    };
    if (!this.checkTimeErr(event["start_time"], event["end_time"])) {
      this.props.sendError(["End time should be after start time"]);
    } else {
      this.props.createEvent(event).then(() => this.redirect());
    }
  }

  redirect() {
    this.props.router.push(`/city/${this.props.cityId}/event`);
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="event-form-error">
          {
            this.props.errors.map((err, idx) => (
              <li key={`event-err-${idx}`}>{err}</li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="form-container">
        <h2>Create An Event</h2>
        <form onSubmit={this.handleSubmit} className="form-box">
          {this.renderErrors()}
          <div className="event-form">
            <label>Event Name</label>
              <input type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className="event-input" />

              <label>Location/Address</label>
                <input type="text"
                  value={this.state.location}
                  onChange={this.update("location")}
                  className="event-input" />

              <label>Date</label>
                <input type="date"
                  value={this.state.date}
                  onChange={this.update("date")}
                  className="event-input" />

              <label>Start Time</label>
                <input type="time"
                  value={this.state.start_time}
                  onChange={this.update("start_time")}
                  className="event-input" />

              <label>End Time</label>
                <input type="time"
                  value={this.state.end_time}
                  onChange={this.update("end_time")}
                  className="event-input" />

                <label>Sport Category</label>
                  <select
                    value={this.state.category}
                    onChange={this.update('category')}
                    defaultValue="Select sport category">
                    <option>Select sport category</option>
                    {this.sportCategory().map((type, i) => {
                      return <option value={type} key={i}>{type}</option>;
                    })}
                  </select>

                <label>Skill Level</label>
                  <select
                    value={this.state.level}
                    onChange={this.update('level')}
                    defaultValue="Select skill level">
                    <option>Select skill level</option>
                    {this.skillLevel().map((type, i) => {
                      return <option value={type} key={i}>{type}</option>;
                    })}
                  </select>

                <label>Number of Attendees</label>
                  <input
                    type="number"
                    value={this.state.attendees_num}
                    onChange={this.update('attendees_num')}/>

                  <label>Event Description</label>
                    <textarea value={this.state.description} onChange={this.update('description')} />

                <input className="event-button" type="submit" value="Create Event"/>
          </div>
        </form>
      </div>
    );
  }
}

export default EventForm;
