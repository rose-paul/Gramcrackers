import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.match.params.username)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username){
            this.props.fetchUserPosts(this.props.match.params.username);
        }
 
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
        
    }


    render() {

        if (!this.props.posts && !this.props.errors) return null;
        // if (this.props.errors) {
        //     return <span className="no-user">{this.props.errors[0]}</span>
        // }
         if (this.props.currentUser && this.props.match.params.username === this.props.currentUser.username) {
            let userposts = Object.values(this.props.posts);
            return (
                (   
                <div className="profile-page">
                    <div className="profile-nav">
                        <img className="profile-pic" src="https://img.icons8.com/color/48/000000/cheburashka.png"/>
                        <div className="profile-nav-right">
                            <div className="username-logout">
                                <p className="username-display">{this.props.match.params.username}</p>
                                <button className="logout-button" onClick={this.handleLogout}>Logout</button>
                            </div>
                            <div className="profile-info">
                                <p>profile info here</p>
                            </div>
                        </div>
                    </div>
                        <ul className="profile-feed">
                            {
                                userposts.reverse().map( post => (
                                    <li key={post.id}>
                                        <img  src={post.photoUrl} width="300" height="300"/>
                                        <span>{post.caption}</span>
                                        <button onClick={() => this.props.deletePhoto(post.id)}>Delete</button>
                                    </li>
                                ))
                            }
                        </ul>
                </div>
                ) 
            ) 
        } else {
             let userposts = Object.values(this.props.posts);
            return (
                <div className="profile-page">
                    <div className="profile-nav">
                        <img className="profile-pic" src="https://img.icons8.com/color/48/000000/cheburashka.png" />
                        <div className="profile-nav-right">
                            <div className="username-logout">
                                <p className="username-display">{this.props.match.params.username}'s profile</p>
                                <button className="follow-button">Follow</button>
                            </div>
                            <div className="profile-info">
                                <p>profile info here</p>
                            </div>
                        </div>
                    </div>
                <ul className="profile-feed">
                    {
                        userposts.reverse().map(post => (
                            <li>
                                <img src={post.photoUrl} width="300" height="300" />
                                <span>{post.caption}</span>
                            </li>
                        ))
                    }
                </ul>
                </div>
            )

        }
    }
}

export default Profile;