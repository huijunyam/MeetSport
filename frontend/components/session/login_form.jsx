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

  componentDidMount() {
    this.props.clearError();
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
    this.props.router.push('/cities');
  }

  guestLogin(e) {
    e.preventDefault();
    const guestUser = {
      username: "guest",
      password: "password"
    };
    const user = Object.assign({}, guestUser);
    // debugger
    this.props.login(user).then(() => this.redirect());
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul className='auth-error'>
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
        <section className="auth-nav">
          <div className="site-name-with-logo">
            <Link to="/" className="logo"><img src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1484763747/Logomakr_1JnLLO_hemnyc.png"} alt="logomakr"/></Link>
          </div>
          <div>
            <button onClick={this.guestLogin}>Guest Demo</button>
            <button onClick={this.handleClick}>Sign Up</button>
          </div>
        </section>

        <div className="auth-form-container">
          <h2>Welcome back</h2>
          <form onSubmit={this.handleSubmit} className="auth-form-box">
            <span>not registered yet{"?"} {this.navLink()}</span>
            {this.renderErrors()}
            <div className="auth-form">
              <br />
              <br />
                <label> Username
    							<input type="text"
    								value={this.state.username}
    								onChange={this.update("username")}
    								className="auth-input" />
  						  </label>

    						<label> Password
    							<input type="password"
    								value={this.state.password}
    								onChange={this.update("password")}
    								className="auth-input" />
    						</label>
  						<br/>
              <br />
                <input className="button" type="submit" value="Log In"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
