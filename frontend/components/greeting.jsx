import React from "react";
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';

class Greeting extends React.Component {

    constructor({ props }) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
    }

    render() {
        const display = this.props.currentUser ? (
            <div>
                <p>Welcome, {this.props.currentUser.username} </p>
                <button onClick={e => this.handleClick(e)}>Logout</button>
            </div>
        ) : (
                null
            )
        return (
            <div>
                {display}
            </div>
        );
    }

}

export default Greeting;

