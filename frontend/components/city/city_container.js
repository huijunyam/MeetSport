import { connect } from 'react-redux';
import City from './city';
import { fetchCity } from '../../actions/city_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {

  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(City);
