import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import { login, logout } from "./util/session_api_util";


window.login = login;
window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
});