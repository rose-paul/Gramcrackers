import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from "./store/store";
import { login } from "./util/session_api_util";



const store = configureStore();
window.getState = store.getState
window.dispatch = store.dispatch
window.login = login;


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
});