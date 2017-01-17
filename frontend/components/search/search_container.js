import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => {
  return {
    events: Object.keys(state.search).map(id => state.search[id])
  };
};

export default connect(mapStateToProps, null)(Search);
