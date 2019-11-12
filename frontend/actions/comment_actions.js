import { fetchComments } from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';


const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const fetchAllComments = postId => dispatch => fetchComments(postId)
    .then( comments => dispatch(receiveAllComments(comments)),
        errors => dispatch(receiveErrors(errors.responseJSON)))