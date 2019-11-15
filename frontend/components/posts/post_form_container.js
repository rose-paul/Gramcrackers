import { connect } from "react-redux";
import { postPhoto, updatePhoto } from "../../actions/post_actions";
import PostForm from "./post_form";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {

        currentUser: state.entities.users[state.session.id],
        post: {
            photoFile: null,
            photoUrl: null,
            caption: ""
        },
        formType: 'New Post'

    }
};
const mapDispatchToProps = dispatch => ({
    action: FormData => dispatch(postPhoto(FormData)),
    closeModal: () => dispatch(closeModal())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);