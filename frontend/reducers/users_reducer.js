import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { LOCATION_CHANGE } from 'react-router-redux';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOCATION_CHANGE:
            return state;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};