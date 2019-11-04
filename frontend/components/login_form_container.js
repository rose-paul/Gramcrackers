import { connect } from "react-redux";
import SessionForm from './session_form';
// import { HashRouter } from "react-router-dom";
import { loginUser, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'  //login
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);