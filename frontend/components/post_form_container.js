import { connect } from "react-redux";
import { postPhoto } from "../actions/post_actions";
import PostForm from "./post_form";
const mapStateToProps = (state) => {
    return {

        currentUser: state.entities.users[state.session.id]

    }
};
const mapDispatchToProps = dispatch => ({
    postPhoto: FormData => dispatch(postPhoto(FormData))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);