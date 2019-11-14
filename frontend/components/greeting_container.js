import React from 'react';
import { connect } from "react-redux";
import Greeting from "./greeting";
import { logoutUser } from "../actions/session_actions";
import { Link, withRouter } from 'react-router-dom';
import { openModal, closeModal } from "../actions/modal_actions";

const mapStateToProps = (state, ownprops) => {
    return {
    currentUser: state.entities.users[state.session.id]
}};
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    createFormModal: (
        <div onClick={() => dispatch(openModal('createpost'))}>
            <img className="right-button" src="/002-upload.png" />
        </div>
    ),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));