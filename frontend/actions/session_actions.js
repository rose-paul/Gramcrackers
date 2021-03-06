import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOCATION_CHANGE = "LOCATION_CHANGE"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveLocationChange = {
    type: LOCATION_CHANGE
}

export const createNewUser = (formUser) => (dispatch) => signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));

export const loginUser = (formUser) => (dispatch) => login(formUser)
    .then(user => {
        return dispatch(receiveCurrentUser(user))
    },
        errors => {
            return dispatch(receiveErrors(errors.responseJSON))
        });

export const logoutUser = () => (dispatch) => logout()
    .then(() => dispatch(logoutCurrentUser()),
        errors => {
            return dispatch(receiveErrors(errors))
        });



