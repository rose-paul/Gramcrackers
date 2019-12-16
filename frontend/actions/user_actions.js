import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const RECEIVE_SEARCH_RES = "RECEIVE_SEARCH_RES"

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

const receiveSearchRes = users => ({
    type: RECEIVE_SEARCH_RES,
    users
})



export const fetchOwner = userId => dispatch => APIUtil.fetchUser(userId)
    .then( user => dispatch(receiveUser(user)), 
    errors => dispatch(receiveUserErrors(errors.responseJSON)))

export const fetchOwnerByUsername = username => dispatch => APIUtil.fetchUserByUsername(username) 
    .then(user => dispatch(receiveUser(user)), 
    errors => dispatch(receiveUserErrors(errors.responseJSON)))

export const updateUser = user => dispatch => APIUtil.updateUser(user)
    .then( user => dispatch(receiveUser(user)),
        errors => dispatch(receiveUserErrors(errors.responseJSON)))

export const searchUsers = username => dispatch => APIUtil.searchUsers(username)
    .then( users => dispatch(receiveSearchRes(users)),
        errors => dispatch(receiveUserErrors(errors.responseJSON)))