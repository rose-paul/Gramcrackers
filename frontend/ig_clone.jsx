import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from "./store/store";
import { loginUser } from "./actions/session_actions";




document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.loginUser = loginUser;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});