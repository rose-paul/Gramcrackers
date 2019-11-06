import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
        
    }


    render() {
        const display = 
        (this.props.currentUser && this.props.match.params.username === this.props.currentUser.username) ? (
            <div className="profile-nav">
                <p className="username-display">{this.props.match.params.username}</p>
                <button className="logout-button" onClick={this.handleClick}>Logout</button>
            </div>
        ) : (
            <div>
                <p>{this.props.match.params.username}'s profile</p>
            </div>    
        );

        // make extra conditional -- ajax GET request for that user. If success, render one thing, else
        // redirect
        
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Profile;