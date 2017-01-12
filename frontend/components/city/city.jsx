import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonType: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchCity(this.props.cityId);
    // this.checkMembership();
  }

  // checkMembership() {
  //   if (this.props.cityDetail.members.indexOf(this.props.currentUser) === -1) {
  //     this.setState({buttonType: "Join Us"});
  //   } else {
  //     this.setState({buttonType: "Unjoin"});
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    const membership = { member_id: this.props.currentUser.id,
                         city_id: this.props.cityId };
                        //  debugger
    if (this.state.buttonType === "Join Us") {
      this.props.joinCity(membership);
    } else {
      // this.props.unjoinCity(membership);
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="sub-city-header">
          <img src={this.props.cityDetail.background_image_url} />
          <h2>{this.props.cityDetail.name}</h2>
          <button onClick={this.handleClick} className="sub-city-header-button">Join Us</button>
        </div>
        <div className="city-home-list">
          <section className="city-sublist">
            <div>All Events</div>
            <div>All Members</div>
            <div>Calendar</div>
            <div>Sport Category</div>
            <div>Create Event</div>
          </section>
          <section className="city-sublist-content">

          </section>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default City;
