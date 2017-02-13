import { connect } from 'react-redux';
import User from './user';
import { getUser, updateUser, clearProfile } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const userDetail = state.userDetail;
  const cities = state.userDetail.cities;
  const currentUser = state.session.currentUser;
  let currentUserId = null;
  if (currentUser !== null){
    currentUserId = state.session.currentUser.id;
  }
  return {
    userId, userDetail, cities, currentUser, currentUserId
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(getUser(id)),
  updateUser: (user) => dispatch(updateUser(user)),
  clearProfile: () => dispatch(clearProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
