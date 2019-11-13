import { RECEIVE_LIKES } from "../actions/like_actions";

export default (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        default:
            return state;
    }
}