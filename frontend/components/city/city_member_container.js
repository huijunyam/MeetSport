import { connect } from 'react-redux';
import CityMember from './city_member';

const mapStateToProps = (state, ownProps) => ({
  members: state.cityDetail.members
});


export default connect(mapStateToProps, null)(CityMember);
