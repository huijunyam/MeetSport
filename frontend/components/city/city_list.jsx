import React from 'react';

class CityIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  redirect() {
    this.props.router.push("/");
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Log Out</button>
    );
  }
}

export default CityIndex;
