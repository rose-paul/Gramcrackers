import { connect } from "react-redux";
import FeedIndexItem from "./feed_index_item";
import { addComment, fetchAllComments } from "../../actions/comment_actions";
import { addPostLike, removePostLike } from "../../actions/like_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchOnePost } from "../../actions/post_actions";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment)),
    addLike: postId => dispatch(addPostLike(postId)),
    removeLike: (postId, userId) => dispatch(removePostLike(postId, userId)),
    commentOptionsModal: (type, comment, fn) => dispatch(openModal(type, comment, fn)),
    fetchPost: (postId) => dispatch(fetchOnePost(postId)),
    fetchComments: postId => dispatch(fetchAllComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndexItem);