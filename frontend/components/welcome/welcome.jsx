import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.userSignup = this.userSignup.bind(this);
  }

  redirect() {
    this.props.router.push("/cities");
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {
      username: "guest",
      password: "password"
    };
    this.props.login(user).then(() => this.redirect());
  }

  userLogin(e) {
    e.preventDefault();
    this.props.router.push("/login");
  }

  userSignup(e) {
    e.preventDefault();
    this.props.router.push("/signup");
  }

  description() {
    return (
      <div className="description">
        <section className="col-third sub-description1">
          <h4>Go Explore</h4>
          <p>Explore your sport interest and try something that you never dream of</p>
        </section>
        <section className="col-third sub-description2">
          <h4>Meet Up</h4>
          <p>Meet people with similar sport interest wherever you go</p>
        </section>
        <section className="col-third sub-description3">
          <h4>Discover Happiness</h4>
          <p>Discover your hidden ability and talent in sport that lead a healthy lifestyle</p>
        </section>
      </div>
    );
  }

  render() {
    return (
      <div className="welcome-page">
        <div className="welcome-header">
          <div className="site-name-with-logo">
            <Link to="/" className="logo"><img src={"http://res.cloudinary.com/dirtnmtpc/image/upload/v1484092751/Logomakr_2rIReH_jz2ink.png"} alt="logomakr"/></Link>
            <Link to="/" className="site-name-head">meetSport</Link>
          </div>
          <ul className="welcome-page-nav">
            <li className="welcome-page-list"><button onClick={this.guestLogin} className="guest-button">Guest Demo</button></li>
            <li className="welcome-page-list"><button onClick={this.userLogin}>Log In</button></li>
            <li className="welcome-page-list"><button onClick={this.userSignup}>Sign Up</button></li>
          </ul>
        </div>
        <div className="video-signup">
          <div className="videoPlay">
            <video autoPlay loop className="videoInsert">
              <source src="http://res.cloudinary.com/dirtnmtpc/video/upload/v1484567522/Sunset-Lapse_m8qjyg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="welcome-title">
            <h2>Together we explore and connect through sports</h2>
            <br />
            <p>Meet and make friends with people that shares similar interest</p>
            <br />
            <br />
            <br />
            <br />
            <button className="signup-button" onClick={this.userSignup}>Sign Up</button>
          </div>
        </div>

        {this.description()}
        <footer className="welcome-footer">
          <Link to="/" className="site-name">meetSport</Link>
          <ul className="welcome-page-nav">
            <li className="welcome-page-list">
              <Link to="/login">Log In</Link>
            </li>
            <li className="welcome-page-list">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </footer>
      </div>
    );

  }
}

export default Welcome;
