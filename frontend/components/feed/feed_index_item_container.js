import { connect } from "react-redux";
import FeedIndexItem from "./feed_index_item";
import { addComment } from "../../actions/comment_actions";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndexItem);