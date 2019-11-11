import React from 'react';
import PostShow from './post_show';
import { connect } from "react-redux";
import { fetchOnePost, deletePhoto } from '../actions/post_actions';
import { fetchOwner } from '../actions/user_actions';
import { openModal, closeModal } from '../actions/modal_actions';



const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    owner: state.entities.owner,
    errors: state.errors.posts
})

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
    fetchPost: postId => dispatch(fetchOnePost(postId)),
    deletePhoto: postId => dispatch(deletePhoto(postId)),
    fetchOwner: userId => dispatch(fetchOwner(userId)),
    editPostModal: (type, id) => dispatch(openModal(type, id)),
    postOptionsModal: (type, id) => dispatch(openModal(type, id)),
    closeModal: () => dispatch(closeModal())
}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);

