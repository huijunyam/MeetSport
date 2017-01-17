import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { updateUser, clearUserError } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const userDetail = state.userDetail;
  const currentUser = state.session.currentUser;
  const errors = state.errors;
  const about_me = state.userDetail.about_me || "";
  let currentUserId = null;
  if (currentUser !== null){
    currentUserId = state.session.currentUser.id;
  }
  // debugger
  return {
    userId,
    userDetail,
    currentUser,
    currentUserId,
    errors,
    about_me
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  clearUserError: () => dispatch(clearUserError())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
