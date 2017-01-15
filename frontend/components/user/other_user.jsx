import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import UserJoinEvent from './user_join_event';
import UserHostEvent from './user_host_event';

class OtherUser extends React.Component {
  constructor(props){
    super(props);
    this.convertTimefromX = this.convertTimefromX.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
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
    return (
      <div>
        <HeaderContainer />
        <div className="user-container">
          <div className="user-bio">
            <h3>{userDetail.name}</h3>
            <h4>Member since: {this.convertTimefromX()}</h4>
            <h4>About me</h4>
            <p>{userDetail.about_me}</p>
            <h4>{userDetail.name} has joined</h4>
            <ul className="user-join-city">
              {userDetail.cities.map((city, id) => (<li key={`city-${id}`}>{city.name}</li>))}
            </ul>
            <h4>{userDetail.name} has hosted: </h4>
            <ul>
              {userDetail.events.map((event, id) => (
                <UserHostEvent key={`host-${id}`} event={event} />
              ))}
            </ul>
            <h4>{userDetail.name} has joined: </h4>
            <ul className="user-join-event">
              {userDetail.event_attendees.map(event => (
                <UserJoinEvent key={`event-${event.id}`} event={event} />
              ))}
            </ul>
          </div>
          <div className="profile-pic-container">
            <img src={userDetail.profile_img}/>
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default OtherUser;
