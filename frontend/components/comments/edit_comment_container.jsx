import React from 'react';
import { deleteComment } from '../../actions/comment_actions';
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'

const EditComment = (props) => (
    <div className="delete-comment" onClick={
        () => props.deleteComment(props.comment)
        .then(() => {
            debugger
            props.clickHandler ? props.clickHandler() : null
            props.closeModal()
        })
    }>
        Delete
    </div>
)

const mapDispatchToProps = dispatch => ({
    deleteComment: comment => dispatch(deleteComment(comment)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(EditComment);

