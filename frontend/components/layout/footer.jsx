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
    );
  }
}

export default withRouter(Header);
