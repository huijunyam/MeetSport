import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';

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

  componentDidMount() {
    this.props.clearError();
  }
  
  update(field) {

  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <div>

        </div>
        <FooterContainer />
      </div>
    );
  }

}

export default UserEdit;
