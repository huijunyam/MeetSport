import { connect } from 'react-redux';
import CityList from './city_list';
import { fetchCities } from '../../actions/city_actions';

const mapStateToProps = state => ({
  cities: Object.keys(state.cities).map(id => state.cities[id])
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList);
