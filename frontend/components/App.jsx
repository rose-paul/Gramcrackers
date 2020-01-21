import React from "react";
import GreetingContainer from "./navbar/greeting_container";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";
import FeedContainer from "./feed/feed_container";
import ProfileContainer from "./profile/profile_container";
import PostFormContainer from "./posts/post_form_container";
import Modal from "./modal";
import PostShowContainer from "./posts/post_show_container";
import EditProfileContainer from "./profile/edit_profile_container";




const App = () => {
    return (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>   
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} /> 
            <ProtectedRoute exact path="/posts/new" component={PostFormContainer} />
            <ProtectedRoute exact path="/posts/:id" component={PostShowContainer} />
            <ProtectedRoute exact path="/accounts/edit" component={EditProfileContainer} />
            <ProtectedRoute exact path="/" component={FeedContainer} />
            <Route exact path="/:username" component={ProfileContainer} />
            <Redirect to="/signup"/>
        </Switch>  
        
    </div>

    )

}

export default App;