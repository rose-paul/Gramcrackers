import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = comment => {
    debugger
    return {
    type: REMOVE_COMMENT,
    commentId: comment.id
}}

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const fetchAllComments = postId => dispatch => APIUtil.fetchComments(postId)
    .then( comments => dispatch(receiveAllComments(comments)),
        errors => dispatch(receiveErrors(errors.responseJSON)))

export const addComment = comment => dispatch => APIUtil.makeComment(comment) 
    .then( comment => dispatch(receiveComment(comment)),
        errors => dispatch(receiveErrors(errors)))

export const deleteComment = comment => dispatch => APIUtil.deleteComment(comment)
    .then( comment => dispatch(removeComment(comment)),
        errors => dispatch(receiveErrors(errors)))