import React from 'react';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userDetail.name,
      email: this.props.userDetail.email,
      about_me: this.props.userDetail.about_me,
      profile_img: this.props.userDetail.profile_img
    };
  }


}

export default UserEdit;
