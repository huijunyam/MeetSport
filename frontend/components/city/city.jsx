import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import Forecast from 'react-forecast';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventHover: "noColor",
      memberHover: "noColor",
      calendarHover: "noColor",
      createHover: "noColor",
      search: ""
     };
    this.handleClick = this.handleClick.bind(this);
    this.handleEventHover = this.handleEventHover.bind(this);
    this.handleMemberHover = this.handleMemberHover.bind(this);
    this.handleCalendarHover = this.handleCalendarHover.bind(this);
    this.handleCreateHover = this.handleCreateHover.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  locationArr() {
    return {
      1: {latitude: 37.77, longitude: -122.42},
      2: {latitude: 34.05, longitude: -123.41},
      3: {latitude: 47.61, longitude: -122.33},
      4: {latitude: 40.71, longitude: -74.01},
      5: {latitude: 42.36, longitude: -71.06},
      6: {latitude: 41.88, longitude: -87.63}
    };
  }
  componentDidMount() {
    this.props.fetchCity(this.props.cityId);
  }

  redirect() {
    this.props.router.push(`/city/${this.props.cityId}`);
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

  search_redirect() {
    this.props.router.push(`/city/${this.props.cityId}/search`);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
    this.props.fetchCitySearch((e.target.value).toLowerCase(), this.props.cityId).then(() => this.search_redirect());
  }

  render() {
    let buttonType = (this.props.hasMember) ? "Leave the City" : "Join Us";
    return (
      <div className="align-footer">
        <div>
          <HeaderContainer />
          <div className="sub-city-header">
            <img src={this.props.cityDetail.header_image} />
            <h2>{this.props.cityDetail.name}</h2>
            <button onClick={this.handleClick} className="sub-city-header-button">{buttonType}</button>
          </div>
          <div className="weather-forecast">
            <Forecast latitude={this.locationArr()[this.props.cityId]["latitude"]}
              longitude={this.locationArr()[this.props.cityId]["longitude"]}
              name="City" />
          </div>
          <div className="city-home-list">
            <section className="city-sublist col-first">
              <Link to={`/city/${this.props.cityId}/event`} onClick={this.handleEventHover}>
                <div className={this.state.eventHover}>All Events</div>
              </Link>
              <Link to={`/city/${this.props.cityId}/member`} onClick={this.handleMemberHover}>
                <div className={this.state.memberHover}>All Members</div>
              </Link>
              <Link to={`/city/${this.props.cityId}/calendar`} onClick={this.handleCalendarHover}>
                <div className={this.state.calendarHover}>Calendar</div>
              </Link>
              <Link to={`/city/${this.props.cityId}/create`} onClick={this.handleCreateHover}>
                <div className={this.state.createHover}>Create Event</div>
              </Link>
              <div className="city-search-bar">
                <input type="text"
                  placeholder="Search by Sport Category"
                  value={this.state.search}
                  onChange={this.handleChange}
                  className="city-search-input" />
              </div>
            </section>
            <section className="city-sublist-content col-lastest">
                <div>{this.props.children}</div>
            </section>
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default City;
