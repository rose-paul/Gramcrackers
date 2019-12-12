import { connect } from "react-redux";
import Feed from "./feed";
import { fetchFollows } from "../../actions/follow_actions";
import { fetchFeedPosts } from "../../actions/feed_actions";



const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
    fetchFollows: type => dispatch(fetchFollows(type)),
    fetchFeedPosts: userIds => dispatch(fetchFeedPosts(userIds))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);