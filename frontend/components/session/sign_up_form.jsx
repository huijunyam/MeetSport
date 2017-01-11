import React from 'react';
import { Link } from 'react-router';
import SignUpFormContainer from './sign_up_form_container';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      name: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push("/home");
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="auth-error">
          {
            this.props.errors.map((err, idx) => (
              <li key={`err-${idx}`}>{err}</li>
            ))
          }
        </ul>
      );
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push("/login");
  }

  navLink() {
    return <Link to="/login">Log In Here</Link>;
  }

  render() {
    return (
      <div>
        <section className="auth-nav signup-form">
          <div className="site-name-with-logo">
            <Link to="/" className="logo"><img src={"http://res.cloudinary.com/dirtnmtpc/image/upload/v1484092751/Logomakr_2rIReH_jz2ink.png"} alt="logomakr"/></Link>
            <Link to="/" className="site-name-head">meetSport</Link>
          </div>
          <button onClick={this.handleClick}>Log In</button>
        </section>

        <div className="auth-form-container">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} className="auth-form-box">
            <span>Already a member{"?"} {this.navLink()}</span>
            {this.renderErrors()}
            <div className="auth-form">
              <br />
              <br />
                <label>Username</label>

    							<input type="text"
    								value={this.state.username}
    								onChange={this.update("username")}
    								className="auth-input" />

                <label>Name</label>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    className="auth-input" />

                  <label>Email Address</label>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="auth-input" />

    						<label>Password</label>
    							<input type="password"
    								value={this.state.password}
    								onChange={this.update("password")}
    								className="auth-input" />
  						<br/>
              <br />
                <input className="button" type="submit" value="Sign Up"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
