import * as APIUtil from "../util/like_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLikes = likes => {
    return {   type: RECEIVE_LIKES,
        likes
    }
}

export const fetchPostLikes = postId => dispatch => APIUtil.fetchPostLikes(postId)
    .then( likes => dispatch(receiveLikes(likes)),
            errors => dispatch(receiveErrors(errors)))