import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import UserJoinEvent from './user_join_event';
import UserHostEvent from './user_host_event';
import { Link } from 'react-router';

class User extends React.Component {
  constructor(props){
    super(props);
    this.convertTimefromX = this.convertTimefromX.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.redirect = this.redirect.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  redirect() {
    this.props.router.push(`/users/${this.props.currentUserId}/edit`);
  }

  handleClick(e) {
    e.preventDefault();
    this.redirect();
  }

  convertTimefromX() {
    let date = this.props.userDetail.created_at;
    let dateIdx = date.indexOf("T");
    let dateArr = date.slice(0, dateIdx).split("-");
    dateArr.push(dateArr.shift());
    return dateArr.join("/");
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        let image = results[0];
        const user = {id: this.props.userId, profile_img: image.url};
        this.props.updateUser(user);
      }
    });
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
                {userDetail.cities.map((city, id) => (<li className="user-city-list" key={`user-city-${id}`}><Link to={`/city/${city.id}`}>{city.name}</Link></li>))}
              </ul>
              <br />
              <h4>{userDetail.name} has hosted {userDetail.events.length} {event}</h4>
              <ul className="user-host-event">
                {userDetail.events.map((event, id) => (
                  <UserHostEvent key={`user-host-${id}`} event={event} />
                ))}
              </ul>
              <h4>{userDetail.name} has joined {userDetail.event_attendees.length} {event}</h4>
              <ul className="user-join-event">
                {userDetail.event_attendees.map(event => (
                  <UserJoinEvent key={`users-event-${event.id}`} event={event} />
                ))}
              </ul>
              <button className="edit-button" onClick={this.handleClick}>Edit Profile</button>
            </div>
            <div className="profile-pic-container">
              <img src={userDetail.profile_img}/>
              <button className="image-upload-button" onClick={this.upload}>Upload Profile Image</button>
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

export default User;
