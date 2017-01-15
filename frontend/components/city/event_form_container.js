import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, clearError, sendError } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const currentUser = state.currentUser;
  const errors = state.errors;
  // debugger
  return {
    cityId,
    currentUser,
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  clearError: () => dispatch(clearError())
  // sendError: (error) => dispatch(sendError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
