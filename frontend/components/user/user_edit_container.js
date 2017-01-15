import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const userDetail = state.userDetail;
  return {
    userId,
    userDetail
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: (id) => dispatch(updateUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
