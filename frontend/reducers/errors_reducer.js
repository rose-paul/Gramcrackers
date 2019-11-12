import { combineReducers } from 'redux';
import sessionErrorsReducer from "./session_errors_reducer";
import postErrorsReducer from './post_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    postErrors: postErrorsReducer,
    userErrors: userErrorsReducer,
    commentErrors: commentErrorsReducer
});

export default errorsReducer;