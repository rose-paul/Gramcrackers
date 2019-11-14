import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";


export default (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE: 
            return Object.assign({}, state, { [action.like.id]: action.like})
        case REMOVE_LIKE:
            let nextState = Object.assign({}, state)
            delete nextState[action.like.id]
            return nextState
        default:
            return state;
    }
}