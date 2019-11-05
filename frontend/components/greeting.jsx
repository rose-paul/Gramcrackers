import React from "react";
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
class Greeting extends React.Component {

    constructor({ props }) {
        super(props);
    }

   
    render() {

        const searchIcon = <img src="https://img.icons8.com/ios-filled/24/000000/search.png"/>
        const display = this.props.currentUser ? (
            <div className="nav-bar">
                <div className="home-links-div">
                    <Link className='home-link' to="/"> <img src="https://img.icons8.com/plasticine/100/000000/camera.png"/></Link>
                    <Link className='home-link' to="/"><h2>Gramcrackers</h2></Link>
                    {/* <p>Welcome, {this.props.currentUser.username} </p> */}
                </div>
                <div className="middle-nav-div">
                    <input className='search' type="text" placeholder="Search"/>
                </div>
                
                <div className="right-nav-div">
                    <img className="explore" src="https://img.icons8.com/android/48/000000/compass.png"/>
                    <Link className='profile-link' to={`/${this.props.currentUser.username}`}><img src="https://img.icons8.com/material-outlined/48/000000/user.png"/></Link>
                </div>
                
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

