import React from "react";
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
class Greeting extends React.Component {

    constructor({ props }) {
        super(props);
    }

   
    //  deleted because protected route redirect
    render() {
        const display = this.props.currentUser ? (
            <div className="nav-bar">
                <Link to="/"> Home</Link>
                {/* <p>Welcome, {this.props.currentUser.username} </p> */}
                <input type="text" placeholder="Search"/>

                <Link to={`/${this.props.currentUser.username}`}>Profile</Link>
                
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

