import React from "react";
import GreetingContainer from "./greeting_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";
import FeedContainer from "./feed_container";
import ProfileContainer from "./profile_container";



const App = (props) => {
    return (
    <div>
        <header>
            <GreetingContainer />
        </header>   
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} /> 
            <ProtectedRoute exact path="/" component={FeedContainer} />
            <Route path="/:username" component={ProfileContainer} />
        </Switch>  
        {/* {
            props.currentUser ? <ProtectedRoute path={`/${props.currentUser.username}`} component={ProfileContainer} />
            : null
        }  */}
        {/* :username */}
        
    </div>

    )

}

export default App;