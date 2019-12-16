import { RECEIVE_SEARCH_RES } from "../actions/user_actions";


export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH_RES:
            return action.users;
        default:
            return state;
    }
}