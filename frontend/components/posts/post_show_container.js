import React from 'react';
import PostShow from './post_show';
import { connect } from "react-redux";
import { fetchOnePost, deletePhoto } from '../../actions/post_actions';
import { fetchOwner } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllComments, addComment, deleteComment } from '../../actions/comment_actions';
import { fetchPostLikes, addPostLike, removePostLike, fetchUserLike } from '../../actions/like_actions';



const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    owner: state.entities.owner,
    likes: state.entities.likes,
    userLike: state.entities.userLike,
    comments: state.entities.comments,
    errors: state.errors.posts
})

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
    fetchPost: postId => dispatch(fetchOnePost(postId)),
    fetchOwner: userId => dispatch(fetchOwner(userId)),
    fetchComments: postId => dispatch(fetchAllComments(postId)),
    fetchLikes: (postId) => dispatch(fetchPostLikes(postId)),

    addComment: comment => dispatch(addComment(comment)),
    deletePhoto: postId => dispatch(deletePhoto(postId)),
    deleteComment: comment => dispatch(deleteComment(comment)),
    addLike: postId => dispatch(addPostLike(postId)),
    removeLike: (postId, userId) => dispatch(removePostLike(postId, userId)),

    editPostModal: (type, id) => dispatch(openModal(type, id)),
    closeModal: () => dispatch(closeModal()),
    postOptionsModal: (type, id) => dispatch(openModal(type, id)),
    commentOptionsModal: (type, comment) => dispatch(openModal(type, comment)),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);

