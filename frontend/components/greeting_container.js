import { connect } from "react-redux";
import Greeting from "./greeting";
import { logoutUser } from "../actions/session_actions";
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownprops) => {
    return {
    currentUser: state.entities.users[state.session.id]
}};
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));