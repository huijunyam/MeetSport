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
    this.props.router.push("/");
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
        <section className="sub-description">
          <h4>Go Explore</h4>
          <p>Explore your sport interest and try something that you never dream of</p>
        </section>
        <section className="sub-description">
          <h4>Meet Up</h4>
          <p>Meet people with similar sport interest wherever you go</p>
        </section>
        <section className="sub-description">
          <h4>Discover Happiness</h4>
          <p>Discover your hidden ability and talent in sport that lead a healthy lifestyle</p>
        </section>
      </div>
    );
  }

  render() {
    return (
      <div className="welcome-page">
        <header className="welcome-header">
          <div className="site-name-with-logo">
            <Link to="/"><img className="logo" src={"http://res.cloudinary.com/dirtnmtpc/image/upload/v1484046593/logo_cdpv8c.png"} /></Link>
            <Link to="/" className="site-name">meetSport</Link>
          </div>
          <ul className="welcome-page-nav">
            <li><button onClick={this.guestLogin} className="guest-button">Guest Demo</button></li>
            <li><button onClick={this.userLogin}>Log In</button></li>
            <li><button onClick={this.userSignup}>Sign Up</button></li>
          </ul>
        </header>
        <div className="homepage-hero-module">
          <div className="video-container">
            <div className="filter"></div>
              <video autoPlay loop className="fillWidth">
                <source src="http://res.cloudinary.com/dirtnmtpc/video/upload/v1484050178/Sunset-Lapse_djfchs.mp4" type="video/mp4" />
              </video>
          </div>
        </div>
        {this.description()}
        <footer className="welcome-footer">
          <Link to="/" className="site-name">meetSport</Link>
        </footer>
      </div>
    );

  }
}

export default Welcome;
