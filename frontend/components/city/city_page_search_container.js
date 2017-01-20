import { connect } from 'react-redux';
import CityPageSearch from './city_page_search';

const mapStateToProps = (state, ownProps) => {
  return {
    events: Object.keys(state.search).map(id => state.search[id])
  };
};

export default connect(mapStateToProps, null)(CityPageSearch);
