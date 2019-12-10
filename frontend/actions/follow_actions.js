import * as APIUtil from '../util/follow_api_util'

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";

const receiveFollowers = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
})

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
})

const removeFollow = followId => ({
    type: DELETE_FOLLOW,
    followId
})

const receiveFollowErrors = err => ({
    type: RECEIVE_FOLLOW_ERRORS,
    err
})

export const fetchFollows = type => dispatch => APIUtil.fetchFollows(type)
    .then( follows => dispatch(receiveFollowers(follows)), 
        err => dispatch(receiveFollowErrors(err)))

export const createFollow = followingId => dispatch => APIUtil.createFollow(followingId)
    .then( follow => dispatch(receiveFollow(follow)),
        err => dispatch(receiveFollowErrors(err)))

export const deleteFollow = followId => dispatch => APIUtil.deleteFollow(followId)
    .then( follow => dispatch(removeFollow(follow.id)) )