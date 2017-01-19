import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventHover: "noColor",
      memberHover: "noColor",
      calendarHover: "noColor",
      createHover: "noColor"
     };
    this.handleClick = this.handleClick.bind(this);
    this.handleEventHover = this.handleEventHover.bind(this);
    this.handleMemberHover = this.handleMemberHover.bind(this);
    this.handleCalendarHover = this.handleCalendarHover.bind(this);
    this.handleCreateHover = this.handleCreateHover.bind(this);
  }

  componentDidMount() {
    this.props.fetchCity(this.props.cityId);
  }

  redirect() {
    this.props.router.push(`/city/${this.props.cityId}/event`);
  }

  handleClick(e) {
    e.preventDefault();
    const membership = { member_id: this.props.currentUser.id,
                         city_id: this.props.cityId };
    if (!this.props.hasMember) {
      this.props.joinCity(membership).then(() => this.redirect());
    } else {
      this.props.unjoinCity(this.props.membershipId.id).then(() => this.redirect());
    }
  }

  handleEventHover() {
    this.setState({
      eventHover: "hoverClass",
      memberHover: "noColor",
      calendarHover: "noColor",
      createHover: "noColor"
    });
  }

  handleCalendarHover() {
    this.setState({
      eventHover: "noColor",
      memberHover: "noColor",
      calendarHover: "hoverClass",
      createHover: "noColor"
    });
  }

  handleMemberHover() {
    this.setState({
      eventHover: "noColor",
      memberHover: "hoverClass",
      calendarHover: "noColor",
      createHover: "noColor"
    });
  }

  handleCreateHover() {
    this.setState({
      eventHover: "noColor",
      memberHover: "noColor",
      calendarHover: "noColor",
      createHover: "hoverClass"
    });
  }

  render() {
    let buttonType = (this.props.hasMember) ? "Leave the City" : "Join Us";
    return (
      <div>
        <HeaderContainer />
        <div className="sub-city-header">
          <img src={this.props.cityDetail.background_image_url} />
          <h2>{this.props.cityDetail.name}</h2>
          <button onClick={this.handleClick} className="sub-city-header-button">{buttonType}</button>
        </div>
        <div className="city-home-list">
          <section className="city-sublist col-first">
            <Link to={`/city/${this.props.cityId}/event`} onClick={this.handleEventHover}><div className={this.state.eventHover}>All Events</div></Link>
            <Link to={`/city/${this.props.cityId}/member`} onClick={this.handleMemberHover}><div className={this.state.memberHover}>All Members</div></Link>
            <Link to={`/city/${this.props.cityId}/calendar`} onClick={this.handleCalendarHover}><div className={this.state.calendarHover}>Calendar</div></Link>
            <Link to={`/city/${this.props.cityId}/create`} onClick={this.handleCreateHover}><div className={this.state.createHover}>Create Event</div></Link>
          </section>
          <section className="city-sublist-content col-lastest">
              <div>{this.props.children}</div>
          </section>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default City;
