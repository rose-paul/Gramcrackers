import React from "react";
import GreetingContainer from "./greeting_container";
import { Route } from 'react-router-dom';
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
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} /> 
        {/* need greetingcontainer to render in Header when logged in. 
        This / will become main feed and /main will be discarded. */}
        <ProtectedRoute exact path="/" component={FeedContainer} />
        {/* make protected route so redirects to login/signup */}

        {
            props.currentUser ? <ProtectedRoute path={`/${props.currentUser.username}`} component={ProfileContainer} />
            : null
        }
        
    </div>

    )

}

export default App;