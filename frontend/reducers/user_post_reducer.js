import { RECEIVE_USER } from "../actions/user_actions";
import { LOCATION_CHANGE } from "../actions/session_actions";

const userPostReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.user
        default:
            return state;
    }
};

export default userPostReducer;