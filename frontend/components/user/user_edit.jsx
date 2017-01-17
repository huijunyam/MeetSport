import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUserId,
      name: this.props.userDetail.name,
      email: this.props.userDetail.email,
      about_me: this.props.about_me,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirect = this.redirect.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearUserError();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userDetail = Object.assign({}, this.state);
    this.props.updateUser(userDetail).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push(`/users/${this.props.currentUserId}`);
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="edit-form-error">
          {
            this.props.errors.map((err, idx) => (
              <li key={`user-err-${idx}`}>{err}</li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="edit-form-container">
          <h2>Edit Profile</h2>
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="user-edit-form">
              <label>Name</label>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                  className="edit-input" />

                <label>Email</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="edit-input" />

                <label>About me</label>
                  <textarea className="textarea-edit" value={this.state.about_me} onChange={this.update('about_me')} />

                <input className="user-edit-button" type="submit" value="Update Profile"/>
            </div>
          </form>
        </div>
        <FooterContainer />
      </div>
    );
  }

}

export default UserEdit;
