import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USER_ERROR = "CLEAR_USER_ERROR";
export const RECEIVE_USER_ERROR = "RECEIVE_USER_ERROR";

export const receiveUser = userDetail => ({
  type: RECEIVE_USER,
  userDetail
});

export const clearUserError = () => ({
  type: CLEAR_USER_ERROR
});

export const receiveUserError = errors => ({
  type: RECEIVE_USER_ERROR,
  errors
});

export const getUser = id => dispatch => (
  UserApiUtil.getUser(id)
    .then(userDetail => dispatch(receiveUser(userDetail)),
      err => dispatch(receiveUserError(err.responseJSON)))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user).then(userDetail => dispatch(receiveUser(userDetail)))
);

export const deleteEvent = id => dispatch => (
  UserApiUtil.deleteEvent(id).then(userDetail => dispatch(receiveUser(userDetail)))
);
