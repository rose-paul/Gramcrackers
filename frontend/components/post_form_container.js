import { connect } from "react-redux";
import { postPhoto } from "../actions/post_actions";
import PostForm from "./post_form";
import { closeModal } from "../actions/modal_actions";

const mapStateToProps = (state) => {
    return {

        currentUser: state.entities.users[state.session.id]

    }
};
const mapDispatchToProps = dispatch => ({
    postPhoto: FormData => dispatch(postPhoto(FormData)),
    closeModal: () => dispatch(closeModal())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);