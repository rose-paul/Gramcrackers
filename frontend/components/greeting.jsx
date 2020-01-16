import React from "react";
import { Link, withRouter } from 'react-router-dom';
import SearchBar from './search_bar'

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

   
    render() {

        let display = this.props.currentUser  ? (
            <div className="nav-bar">
                <div className="home-links-div">
                    <Link className='home-link' to="/"> <img src="/001-camera.png"/></Link>
                    <Link className='home-link' to="/"><h2>Gramcrackers</h2></Link>
                </div>
                <div className="middle-nav-div">
                    <SearchBar />
                </div>
                
                <div className="right-nav-div">
                    {this.props.createFormModal}
                    <Link className='profile-link' to={`/${this.props.currentUser.username}`}><img className="right-button-prof" src="/user.png"/></Link>
                </div>

            </div>
        ) : (
            
                    <div className="nav-bar">
                        <div className="home-links-div">
                        <Link className='home-link' to="/"> <img src="/001-camera.png" /></Link>
                            <Link className='home-link' to="/"><h2>Gramcrackers</h2></Link>
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

