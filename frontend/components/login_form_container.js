import { connect } from "react-redux";
import SessionForm from './session_form';
// import { HashRouter } from "react-router-dom";
import { loginUser, RECEIVE_SESSION_ERRORS, receiveLocationChange } from "../actions/session_actions";


const mapStateToProps = (state) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(loginUser(user)),
    noErrors: () => dispatch(receiveLocationChange)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);