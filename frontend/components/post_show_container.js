import React from 'react';
import PostShow from './post_show';
import { connect } from "react-redux";
import { fetchOnePost, deletePhoto } from '../actions/post_actions';
import { fetchOwner } from '../actions/user_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import { fetchAllComments, addComment, deleteComment } from '../actions/comment_actions';



const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    owner: state.entities.owner,
    comments: state.entities.comments,
    errors: state.errors.posts
})

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
    fetchPost: postId => dispatch(fetchOnePost(postId)),
    deletePhoto: postId => dispatch(deletePhoto(postId)),
    fetchOwner: userId => dispatch(fetchOwner(userId)),
    editPostModal: (type, id) => dispatch(openModal(type, id)),
    postOptionsModal: (type, id) => dispatch(openModal(type, id)),
    commentOptionsModal: (type, comment) => dispatch(openModal(type, comment)),
    closeModal: () => dispatch(closeModal()),
    fetchComments: postId => dispatch(fetchAllComments(postId)),
    addComment: comment => dispatch(addComment(comment)),
    deleteComment: comment => dispatch(deleteComment(comment))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);

