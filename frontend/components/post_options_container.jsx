import { connect } from "react-redux";
import { closeModal, openModal } from "../actions/modal_actions";
import { deletePhoto } from "../actions/post_actions";
import PostOptions from "./post_options";
import { withRouter } from 'react-router-dom';



const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deletePhoto: postId => dispatch(deletePhoto(postId)),
    editPostModal: (type, id) => dispatch(openModal(type, id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostOptions));