import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from "./store/store";
import { loginUser } from "./actions/session_actions";




document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} currentUser={window.currentUser}/>, root);
});