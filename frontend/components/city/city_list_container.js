import { connect } from 'react-redux';
import CityList from './city_list';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(CityList);
