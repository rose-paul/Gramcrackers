import { connect } from "react-redux";
import Profile from "./profile";
import { logoutUser } from "../actions/session_actions";

const mapStateToProps = (state) => {
    return {
    currentUser: state.entities.users[state.session.id]
}};
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);