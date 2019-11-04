import React from "react";
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';

class Greeting extends React.Component {

    constructor({ props }) {
        super(props);

    }

    render() {
        const display = this.props.currentUser ? (
            <div>
                <p>Welcome, {this.props.currentUser.username} </p>
                <button onClick={this.props.logoutUser}>Logout</button>
            </div>
        ) : (
                <div>
                    <p>Sign up to see photos and videos from you friends.</p>
                </div>
            )
        return (
            <div>
                {display}
            </div>
        );
    }

}

export default Greeting;

