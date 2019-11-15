import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePost, updatePhoto } from '../../actions/post_actions';
import PostForm from './post_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from "../../actions/modal_actions";

class EditPostForm extends React.Component {
    componentDidMount() {
        this.props.fetchOnePost(this.props.id)
    }

    render() {
        if (!this.props.posts) return null;
        return(
            <PostForm
            
                post={this.props.posts[this.props.id]}
                formType={this.props.formType}
                action={this.props.action} 
                closeModal={this.props.closeModal}/>
        )

    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    posts: state.entities.posts, //[ownProps.match.params.id]
    formType: "Update Post"
}}

const mapDispatchToProps = dispatch => ({
    fetchOnePost: postId => dispatch(fetchOnePost(postId)),
    action: post => dispatch(updatePhoto(post)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));