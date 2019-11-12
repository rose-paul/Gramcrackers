import { RECEIVE_ALL_COMMENTS } from "../actions/comment_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        default: 
            return state;
    }
}