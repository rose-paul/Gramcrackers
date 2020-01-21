import React from 'react';
import { connect } from "react-redux";
import Profile from "./profile";
import { logoutUser, receiveLocationChange } from "../../actions/session_actions";
import { fetchAllPosts, deletePhoto } from "../../actions/post_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchOwnerByUsername } from '../../actions/user_actions';
import { createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
    return {
    
    currentUser: state.entities.users[state.session.id],
    owner: state.entities.owner,
    posts: state.entities.posts,
    follows: state.entities.follows,
    errors: state.errors.userErrors

}};
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    fetchUserPosts: username => dispatch(fetchAllPosts(username)),
    fetchOwnerByUsername: username => dispatch(fetchOwnerByUsername(username)),
    deletePhoto: postId => dispatch(deletePhoto(postId)),
    viewPostModal: (img) => (
        <div onClick={() => dispatch(openModal('viewpost', img.id))}>
            <img src={img.photoUrl} width="300" height="300"/>
        </div>
    ),
    editProfileModal: (
    <button onClick={() => dispatch(openModal('editprofile'))}>Edit Profile</button>
    ),
    closeModal: () => dispatch(closeModal()),
    createFollow: followingId => dispatch(createFollow(followingId)),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
    fetchFollows: type => dispatch(fetchFollows(type))
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);