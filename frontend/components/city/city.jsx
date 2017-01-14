import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchCity(this.props.cityId);
  }

  handleClick(e) {
    e.preventDefault();
    const membership = { member_id: this.props.currentUser.id,
                         city_id: this.props.cityId };
    if (!this.props.hasMember) {
      this.props.joinCity(membership);
    } else {
      this.props.unjoinCity(this.props.membershipId.id);
    }
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
          <section className="city-sublist col-third">
            <Link to={`/city/${this.props.cityId}/event`} className="city-sublist link"><div className="city-sub-home-list">All Events</div></Link>
            <Link to={`/city/${this.props.cityId}/member`} className="city-sublist link"><div className="city-sub-home-list">All Members</div></Link>
            <Link to={`/city/${this.props.cityId}/calendar`} className="city-sublist link"><div className="city-sub-home-list">Calendar</div></Link>
            <div className="city-sub-home-list">Sport Category</div>
            <div className="city-sub-home-list">Create Event</div>
          </section>
          <section className="city-sublist-content col-last">
              <div>{this.props.children}</div>
          </section>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default City;
