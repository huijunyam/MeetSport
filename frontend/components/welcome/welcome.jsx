import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome_container';
import $ from 'jquery';

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
      <div className="welcome-page align-footer">
        <div className="welcome-header">
          <div className="site-name-with-logo">
            <Link to="/" className="logo"><img src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1484763747/Logomakr_1JnLLO_hemnyc.png"} alt="logomakr"/></Link>
          </div>
          <div className="welcome-page-nav">
            <div className="welcome-page-list"><button onClick={this.guestLogin} className="guest-button">Guest Demo</button></div>
            <div className="welcome-page-list"><button onClick={this.userLogin}>Log In</button></div>
            <div className="welcome-page-list"><button onClick={this.userSignup}>Sign Up</button></div>
          </div>
        </div>
        <div className="video-signup">
          <div className="videoPlay">
            <video autoPlay loop className="videoInsert">
              <source src="https://res.cloudinary.com/dirtnmtpc/video/upload/v1484567522/Sunset-Lapse_m8qjyg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="welcome-title">
            <h2>Meet and make new friends everywhere</h2>
            <br />
            <p>Together we explore and connect through sports</p>
            <br />
            <br />
            <br />
            <br />
            <button className="signup-button" onClick={this.userSignup}>Sign Up</button>
          </div>
          {this.description()}
        </div>

        <footer className="welcome-footer">
          <Link to="/" className="site-name">meetSport</Link>
          <ul className="welcome-page-nav">
            <li className="welcome-page-list">
              <img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484767754/GitHub-Mark-120px-plus_g1wpq2.png"/>
            </li>
            <li className="welcome-page-list">
              <img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484767656/In-2C-108px-R_xxju11.png"/>
            </li>
          </ul>
        </footer>
      </div>
    );
  }

}

export default Welcome;
