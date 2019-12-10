import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, DELETE_FOLLOW } from "../actions/follow_actions";

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, { [action.follow.following_id]: action.follow })
        case DELETE_FOLLOW:
            let nextState = Object.assign({}, state);
            delete nextState[action.followingId]
            return nextState;
        default:
            return state;
    }
}