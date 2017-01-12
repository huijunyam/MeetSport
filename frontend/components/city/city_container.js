import { connect } from 'react-redux';
import City from './city';
import { fetchCity, joinCity, unjoinCity } from '../../actions/city_actions';
import { selectCity } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const cityDetail = selectCity(state, cityId);
  const currentUser = state.session.currentUser;
  // debugger
  return {
    cityId,
    cityDetail,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCity: (id) => dispatch(fetchCity(id)),
  joinCity: (membership) => dispatch(joinCity(membership)),
  unjoinCity: (membership) => dispatch(unjoinCity(membership))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
