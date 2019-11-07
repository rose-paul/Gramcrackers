import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.match.params.username)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
        
    }


    render() {

        if (!this.props.posts && !this.props.errors) return null;
         if (this.props.currentUser && this.props.match.params.username === this.props.currentUser.username) {
            // debugger
            let userposts = Object.values(this.props.posts);
            return (
                (   
                <div className="profile-page">
                    <div className="profile-nav">
                        <p className="username-display">{this.props.match.params.username}</p>
                        <button className="logout-button" onClick={this.handleClick}>Logout</button>
                    </div>
                        <ul className="profile-feed">
                            {
                                userposts.map( post => (
                                    <li><img src={post.photoUrl} width="300" height="300"/></li>
                                ))
                            }
                        </ul>
                </div>
                ) 
            ) 
        } else {
            return (
                <div>
                    <p>{this.props.match.params.username}'s profile</p>
                    {/* <p>{this.state.errors.posts}</p> */}
                </div>    
            )

        }
    }
}

export default Profile;