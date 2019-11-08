import React from "react";
import { Link, withRouter } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

   
    render() {

        const searchIcon = <img src="https://img.icons8.com/ios-filled/24/000000/search.png"/>
        let display = this.props.currentUser  ? (
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
                    <Link to="/posts/new"><img className="post-icon" src="https://img.icons8.com/android/48/000000/compass.png" /></Link>
                    <Link className='profile-link' to={`/${this.props.currentUser.username}`}><img src="https://img.icons8.com/material-outlined/48/000000/user.png"/></Link>
                </div>
                
            </div>
        ) : (
            
                    <div className="nav-bar">
                        <div className="home-links-div">
                            <Link className='home-link' to="/"> <img src="https://img.icons8.com/plasticine/100/000000/camera.png" /></Link>
                            <Link className='home-link' to="/"><h2>Gramcrackers</h2></Link>
                            {/* <p>Welcome, {this.props.currentUser.username} </p> */}
                        </div>
                        <div className="middle-nav-div">
                            <input className='search' type="text" placeholder="Search" />
                        </div>

                        <div className="right-nav-div">
                            <Link className='nav-login' to="/login">Log In</Link>
                            <Link className='nav-signup' to="/signup">Sign Up</Link>
                        </div>
                    </div>
            )

         if (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup" ) display = null;
        return (
            <div>
                {display}
            </div>
        );
    }

}

export default withRouter(Greeting);

