import { connect } from "react-redux";
import CreateUserForm from './create_user_form';
import { createNewUser, receiveLocationChange } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(createNewUser(user)),
    noErrors: () => dispatch(receiveLocationChange)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm);