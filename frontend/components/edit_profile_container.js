import React from 'react';
import PostShow from './post_show';
import { connect } from "react-redux";
import EditProfile from './edit_profile';




const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // updateUser, add bio to backend? as unspecified now
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

