import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome_container';
import $ from 'jquery';
import SlideShow from 'react-image-slideshow';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.userSignup = this.userSignup.bind(this);
    this.slideIndex = 0;
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
        <div>
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
            <ul className="cb-slideshow">
              <li><span>Image 01</span><div><h3>Explore Your Sport Interest</h3></div></li>
              <li><span>Image 02</span><div><h3>Meet And Connect</h3></div></li>
              <li><span>Image 03</span><div><h3>Make New Friends</h3></div></li>
              <li><span>Image 04</span><div><h3>Discover Your Sport Talent</h3></div></li>
              <li><span>Image 05</span><div><h3>Discover Happiness</h3></div></li>
              <li><span>Image 06</span><div><h3>Lead A Healthy Lifestyle</h3></div></li>
            </ul>
            <button className="signup-button" onClick={this.userSignup}>Sign Up</button>
          </div>
        </div>
        <footer className="welcome-footer-exception">
          <p className="footer-note">Designed and Developed by <a className="link-to-portfolio" href="http://www.huijunyam.com">Hui Jun Yam</a></p>
          <ul className="welcome-page-nav">
            <li className="welcome-page-list">
              <a href="https://github.com/huijunyam"><img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484767754/GitHub-Mark-120px-plus_g1wpq2.png"/></a>
            </li>
            <li className="welcome-page-list">
              <a href="https://www.linkedin.com/in/huijunyam"><img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1484767656/In-2C-108px-R_xxju11.png"/></a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }

}

export default Welcome;
