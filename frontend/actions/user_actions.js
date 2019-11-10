import { fetchUser, fetchUserByUsername } from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchOwner = userId => dispatch => fetchUser(userId)
    .then( user => dispatch(receiveUser(user)))

export const fetchOwnerByUsername = username => fetchUserByUsername(username) 
    .then( user => dispatch(receiveUser(user)))