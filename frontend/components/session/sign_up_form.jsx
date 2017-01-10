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
    this.props.router.push("/");
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="signup-err">
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
        <header className="signup-nav">
          <h1>meetSport</h1>
          <button onClick={this.handleClick}>Log In</button>
        </header>
        <div className="signup-form-container">
          <h2>Sign Up</h2>
          <br />
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            Already a member{"?"} {this.navLink()}
            {this.renderErrors()}
            <div className="signup-form">
              <br />
                <label> Username:
    							<input type="text"
    								value={this.state.username}
    								onChange={this.update("username")}
    								className="signup-input" />
  						  </label>
  						<br/>
                <label> Name:
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    className="signup-input" />
                </label>
              <br/>
                <label> Email Address:
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="signup-input" />
                </label>
              <br/>
    						<label> Password:
    							<input type="password"
    								value={this.state.password}
    								onChange={this.update("password")}
    								className="signup-input" />
    						</label>
  						<br/>
                <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
