
import { fetchPosts, fetchPost, createPost } from "../util/post_api_util";

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

const receivePost = post => ({
    type: RECEIVE_POST, 
    post
})

export const fetchAllPosts = (userId) => dispatch => fetchPosts(userId)
    .then( posts => dispatch(receiveAllPosts(posts)))

export const fetchOnePost = postId => dispatch => fetchPost(postId)
    .then(post => dispatch(receivePost(post)))