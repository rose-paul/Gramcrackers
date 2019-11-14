import { combineReducers } from 'redux';


import users from './users_reducer';
import posts from './posts_reducer';
import userPostReducer from './user_post_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer'
import userLikeReducer from './user_like_reducer';

export default combineReducers({
    users,
    posts,
    owner: userPostReducer,
    comments,
    likes,
    userLike: userLikeReducer
});
