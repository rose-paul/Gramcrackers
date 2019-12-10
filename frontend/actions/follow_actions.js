import * as APIUtil from '../util/follow_api_util'

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
})

export const fetchFollows = () => dispatch => APIUtil.fetchFollows()
    .then( follows => console.log(follows), 
        err => console.log(err))