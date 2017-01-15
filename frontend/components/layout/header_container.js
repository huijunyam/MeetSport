import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  let currentUserId = null;
  if (currentUser !== null){
    currentUserId = state.session.currentUser.id;
  }
  return {
    currentUser,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
