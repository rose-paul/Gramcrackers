import { receiveAllPosts, receiveErrors } from './post_actions';
import * as APIUtil from '../util/feed_api_util'

export const fetchFeedPosts = userIds => dispatch => APIUtil.fetchFeedPosts(userIds)
    .then( posts => dispatch(receiveAllPosts(posts)),
    errors => dispatch(receiveErrors(errors.responseJSON)))

