import { connect } from "react-redux";
import FeedIndexItem from "./feed_index_item";
import { addComment } from "../../actions/comment_actions";
import { addPostLike, removePostLike } from "../../actions/like_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment)),
    addLike: postId => dispatch(addPostLike(postId)),
    removeLike: (postId, userId) => dispatch(removePostLike(postId, userId)),
    commentOptionsModal: (type, comment) => dispatch(openModal(type, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndexItem);