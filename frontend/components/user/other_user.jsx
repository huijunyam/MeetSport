import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import UserJoinEvent from './user_join_event';
import OtherUserHostEvent from './other_user_host_event';

class OtherUser extends React.Component {
  constructor(props){
    super(props);
    this.convertTimefromX = this.convertTimefromX.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }
  
  convertTimefromX() {
    let date = this.props.userDetail.created_at;
    let dateIdx = date.indexOf("T");
    let dateArr = date.slice(0, dateIdx).split("-");
    dateArr.push(dateArr.shift());
    return dateArr.join("/");
  }

  render() {
    const { userDetail } = this.props;
    let event = "";
    if (userDetail.events.length === 1 || userDetail.events.length === 0) {
      event = "event";
    } else {
      event = "events";
    }

    let city = "";
    if (userDetail.cities.length === 1 || userDetail.cities.length === 0) {
      city = "city";
    } else {
      city = "cities";
    }

    return (
      <div className="align-footer">
        <div>
          <div className="user-profile-nav">
            <HeaderContainer />
          </div>
          <div className="user-container">
            <div className="user-bio">
              <h3 className="user-name">{userDetail.name}</h3>
              <h4 className="user-member"><strong>Member since:</strong> {this.convertTimefromX()}</h4>
              <h4 className="user-member-about-me"><strong>About me:</strong></h4>
              <p className="about-me-description">{userDetail.about_me}</p>
              <h4>{userDetail.name} has joined {userDetail.cities.length} {city}</h4>
              <ul className="user-join-city">
                {userDetail.cities.map((city, id) => (<li key={`city-event-${id}`} className="user-city-list">{city.name}</li>))}
              </ul>
              <br />
              <h4>{userDetail.name} has hosted {userDetail.events.length} {event}</h4>
              <ul className="user-host-event">
                {userDetail.events.map((event, id) => (
                  <OtherUserHostEvent key={`host-event-${id}`} event={event} />
                ))}
              </ul>
              <h4>{userDetail.name} has joined {userDetail.event_attendees.length} {event}</h4>
              <ul className="user-join-event">
                {userDetail.event_attendees.map(event => (
                  <UserJoinEvent key={`other-event-join-${event.id}`} event={event} />
                ))}
              </ul>
            </div>
            <div className="profile-pic-container">
              <img src={userDetail.profile_img}/>
            </div>
          </div>
        </div>
        <div className="user-footer">
          <FooterContainer />
        </div>
      </div>
    );
  }
}

export default OtherUser;
