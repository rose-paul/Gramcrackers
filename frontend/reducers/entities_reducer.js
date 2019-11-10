import { combineReducers } from 'redux';


import users from './users_reducer';
import posts from './posts_reducer';
import userPostReducer from './user_post_reducer';

export default combineReducers({
    users,
    posts,
    owner: userPostReducer
});
