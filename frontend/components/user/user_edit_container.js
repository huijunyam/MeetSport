import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const userDetail = state.userDetail;
  const currentUser = state.session.currentUser;
  let currentUserId = null;
  if (currentUser !== null){
    currentUserId = state.session.currentUser.id;
  }
  return {
    userId,
    userDetail,
    currentUser,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: (id) => dispatch(updateUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
