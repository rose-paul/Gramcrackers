import React from 'react';
import PostShow from './post_show';
import { connect } from "react-redux";
import { fetchOnePost, deletePhoto } from '../actions/post_actions';
import { fetchOwner } from '../actions/user_actions';



const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    owner: state.entities.owner,
    errors: state.errors.posts
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPost: postId => dispatch(fetchOnePost(postId)),
    deletePhoto: postId => dispatch(deletePhoto(postId)),
    fetchOwner: userId => dispatch(fetchOwner(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);

