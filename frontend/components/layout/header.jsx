import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.redirecToProfile = this.redirecToProfile.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  redirecToProfile() {
    this.props.router.push(`/users/${this.props.currentUserId}`);
  }

  handleClick(e) {
    e.preventDefault();
    this.redirecToProfile();
  }

  render() {
    return (
      <div className="home-container">
        <div className="welcome-header">
          <div className="site-name-with-logo">
            <Link to="/" className="logo"><img src={"http://res.cloudinary.com/dirtnmtpc/image/upload/v1484092751/Logomakr_2rIReH_jz2ink.png"} alt="logomakr"/></Link>
            <Link to="/" className="site-name-head">meetSport</Link>
          </div>
          <ul className="welcome-page-nav">
            <li className="welcome-page-list"><button onClick={this.handleClick}>Profile</button></li>
            <li className="welcome-page-list"><button onClick={this.handleSubmit}>Log Out</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
