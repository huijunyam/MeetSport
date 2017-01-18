import { connect } from 'react-redux';
import City from './city';
import { fetchCity, joinCity, unjoinCity } from '../../actions/city_actions';
import { checkMembership, getMembershipId } from '../../reducers/selector';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityDetail = state.cityDetail;
  const currentUser = state.session.currentUser;
  const membershipId = getMembershipId(state, currentUser, cityId);
  const hasMember = checkMembership(state.cityDetail.members, state.session.currentUser);
  return {
    cityId,
    cityDetail,
    currentUser,
    membershipId,
    hasMember
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCity: (id) => dispatch(fetchCity(id)),
  joinCity: (membership) => dispatch(joinCity(membership)),
  unjoinCity: (id) => dispatch(unjoinCity(id)),
  fetchEvents: (cityId) => dispatch(fetchEvents(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
