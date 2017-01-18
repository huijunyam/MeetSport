import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  render() {
    return (
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
    );
  }
}

export default withRouter(Header);
