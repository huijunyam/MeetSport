import { connect } from 'react-redux';
import OtherUser from './other_user';
import { getUser, clearProfile } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.otheruserId);
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
  clearProfile: () => dispatch(clearProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherUser);
