import React from 'react';
import { Link } from 'react-router';
import LoginFormContainer from './login_form_container';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
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
    this.props.login(user).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/');
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul className='login-error'>
          {this.props.errors.map((err, idx) => (
            <li key={`err-${idx}`}>
              {err}
            </li>
          ))}
        </ul>
      );
    }
	}

  handleClick(e) {
    e.preventDefault();
    this.props.router.push("/signup");
  }

  navLink() {
    return <Link to="/signup">Sign up here!</Link>;
  }

  render() {
    return (
      <div>
        <header className="login-nav">
          <h1>meetSport</h1>
          <button onClick={this.handleClick}>Sign Up</button>
        </header>
        <div className="login-form-container">
          <h2>Welcome back</h2>
          <br />
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            not registered yet{"?"} {this.navLink()}
            {this.renderErrors()}
            <div className="login-form">
              <br />
                <label> Username:
    							<input type="text"
    								value={this.state.username}
    								onChange={this.update("username")}
    								className="login-input" />
  						  </label>
  						<br/>
    						<label> Password:
    							<input type="password"
    								value={this.state.password}
    								onChange={this.update("password")}
    								className="login-input" />
    						</label>
  						<br/>
                <input type="submit" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
