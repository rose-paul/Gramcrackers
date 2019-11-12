import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

     componentDidMount() {
         if (this.props.errors.length) {
             this.setState({ loaded: true })
         }
         this.props.fetchOwnerByUsername(this.props.match.params.username)
            .then( () => this.props.fetchUserPosts(this.props.match.params.username))
            .then( () => this.setState({loaded: true}))
        // Promise.all([this.props.fetchUserPosts(this.props.match.params.username), this.props.fetchOwnerByUsername(this.props.match.params.username)])
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username){
            this.setState({loaded: false})
            this.props.fetchOwnerByUsername(this.props.match.params.username)
                .then(() => this.props.fetchUserPosts(this.props.match.params.username))
                .then( () => this.setState({ loaded: true }))
        }
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
        
    }


    render() {

        let logout;
        let editprofile;
        let follow;

        if (!this.props.posts && !this.props.errors) return null;
        if (this.props.errors.length) {
            return <span className="no-user">{this.props.errors[0]}</span>
        }
        if (!this.state.loaded) return <p className="loading">loading</p>;
        if (this.props.currentUser && this.props.match.params.username === this.props.currentUser.username) {
            logout = <button className="profile-user-options" onClick={this.handleLogout}>Logout</button>
            editprofile = <Link to="/accounts/edit">
                <button className="profile-user-options">Edit Profile</button>
            </Link>
            follow = null;
        } else {
            logout = null;
            editprofile = null;
            follow = <button className="follow-button">Follow</button>
        }
            
            const userposts = Object.values(this.props.posts);  
            
            const profilePic = this.props.owner.photoUrl ? <img className="profile-pic" src={this.props.owner.photoUrl} /> 
                : <img className="profile-pic" src="/user.png"/>;
            const bio = this.props.owner.bio;
            const name = this.props.owner.display_name;
             return ( 
                 <div className="profile-page">
                    <div className="profile-nav">
                        {profilePic}
                        <div className="profile-nav-right">
                            <div className="user-options">
                                <p className="username-display">{this.props.match.params.username}</p>
                                {logout}
                                {editprofile}
                                {follow}
                            </div>
                            <div className="profile-stats">
                                 <p>{userposts.length} posts </p>
                                 <p>x followers</p> 
                                 <br/>
                                 <p>x following</p>
                            </div>
                            <div className="profile-info">
                                <p>{name}</p>
                                <p>{bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-feed-wrapper">
                        <ul className="profile-feed">
                            {
                                userposts.reverse().map( post => (
                                    <li key={post.id}>
                                        <Link to={`/posts/${post.id}`}><img src={post.photoUrl} width="300" height="300" /></Link>
                                    </li>
                                ))
                            }
                        </ul>
                     </div>
                     </div>

            ) 
    }
}

export default Profile;