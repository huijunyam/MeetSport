import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, clearError } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const cityId = parseInt(ownProps.params.cityId);
  const currentUser = state.session.currentUser;
  const errors = state.errors;
  return {
    cityId,
    currentUser,
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
