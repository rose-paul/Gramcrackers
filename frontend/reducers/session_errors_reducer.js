import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, LOCATION_CHANGE } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOCATION_CHANGE:
            return [];
        case RECEIVE_CURRENT_USER:
            return []; //Object.assign({}, { errors: null});
        case RECEIVE_SESSION_ERRORS:
            return action.errors; //Object.assign({}, state, {errors});
        default:
            return state;
    }
};

export default sessionErrorsReducer;