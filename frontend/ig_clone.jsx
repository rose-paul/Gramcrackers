import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from "./store/store";
import { loginUser } from "./actions/session_actions";
import { fetchPosts } from './util/post_api_util'



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
    //test
    window.fetchPosts = fetchPosts;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.loginUser = loginUser;
    //end test
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} currentUser={window.currentUser}/>, root);
});