import React from "react";
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from "./store/store";
import { loginUser } from "./actions/session_actions";
import { fetchAllPosts } from "./actions/post_actions";
import { fetchPosts } from "./util/post_api_util";
import { fetchAllComments } from "./actions/comment_actions";
import { fetchFollows, createFollow, deleteFollow } from "./util/follow_api_util";

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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.loginUser = loginUser;
    window.fetchPosts = fetchPosts;
    window.fetchAllPosts = fetchAllPosts;
    window.fetchAllComments = fetchAllComments;
    window.fetchFollows = fetchFollows;
    window.createFollow = createFollow;
    window.deleteFollow = deleteFollow;
    //end test
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} currentUser={window.currentUser}/>, root);
});