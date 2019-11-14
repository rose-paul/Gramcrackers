import { RECEIVE_USER_LIKE } from "../actions/like_actions";


const userLikeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_LIKE:
            return action.like
        default:
            return state;
    }
};

export default userLikeReducer;