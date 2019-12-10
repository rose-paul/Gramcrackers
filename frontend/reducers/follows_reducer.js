import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, DELETE_FOLLOW } from "../actions/follow_actions";

export default (state = {}, action) => {
    Object.freeze(state)
    debugger
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOWS:
            return Object.assign({}, state, { [action.follow.id]: action.follow })
        case DELETE_FOLLOW:
            let nextState = Object.assign({}, state);
            delete nextState[action.followId]
            return nextState;
        default:
            return state;
    }
}