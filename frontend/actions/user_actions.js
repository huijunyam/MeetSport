import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = userDetail => ({
  type: RECEIVE_USER,
  userDetail
});

export const getUser = id => dispatch => (
  UserApiUtil.getUser(id).then(userDetail => dispatch(receiveUser(userDetail)))
);

export const updateUser = id => dispatch => (
  UserApiUtil.updateUser(id).then(userDetail => dispatch(receiveUser(userDetail)))
);

// export const deleteUser = id => dispatch => (
//
// );
