import { connect } from 'react-redux';
import User from './user';
import { getUser } from '../../actions/user_actions';
import { getCityId } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const userDetail = state.userDetail;
  const cities = state.userDetail.cities;
  const currentUser = state.session.currentUser;
  return {
    userId, userDetail, cities, currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
