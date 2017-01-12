import { connect } from 'react-redux';
import City from './city';
import { fetchCity, joinCity, unjoinCity } from '../../actions/city_actions';
import { checkMembership, selectCity } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityDetail = state.cityDetail;
  const currentUser = state.session.currentUser;
  // const members = state.cityDetail.members;
  const hasMember = checkMembership(state.cityDetail.members, state.session.currentUser);
  // debugger;
  return {
    cityId,
    cityDetail,
    currentUser,
    hasMember
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCity: (id) => dispatch(fetchCity(id)),
  joinCity: (membership) => dispatch(joinCity(membership)),
  unjoinCity: (id) => dispatch(unjoinCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
