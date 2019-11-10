
import { fetchPosts, fetchPost, createPost, deletePost } from "../util/post_api_util";

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const REMOVE_POST = 'REMOVE_POST'

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

const receivePost = post => ({
    type: RECEIVE_POST, 
    post
})

const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})


export const fetchAllPosts = (username) => dispatch => fetchPosts(username)
    .then( posts => dispatch(receiveAllPosts(posts)),
        errors => dispatch(receiveErrors(errors.responseJSON)))

export const fetchOnePost = postId => dispatch => fetchPost(postId)
    .then(post => dispatch(receivePost(post)),
        errors => dispatch(receiveErrors(errors.responseJSON)))

export const postPhoto = formData => dispatch => createPost(formData)
    .then( post => dispatch(receivePost(post)),
        errors => dispatch(receiveErrors(errors.responseJSON)))

export const deletePhoto = postId => dispatch => deletePost(postId)
    .then( () => dispatch(removePost(postId)),
        errors => dispatch(receiveErrors(errors.responseJSON))) 