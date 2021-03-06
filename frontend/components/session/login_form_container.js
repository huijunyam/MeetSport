import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearError } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearError: () => dispatch(clearError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
