import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, action.post); //[action.post.id]:
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case REMOVE_POST:
            let nextState = Object.assign({}, state);
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
};