import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            followed: false
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }

     componentDidMount() {
         if (this.props.errors.length) {
             this.setState({ loaded: true })
         }

        
         this.props.fetchOwnerByUsername(this.props.match.params.username)
            .then( () => this.props.fetchUserPosts(this.props.match.params.username))
            .then( () => this.setState({loaded: true}))
            .then( () => this.props.fetchFollows("following"))
            .then( res => 
                res.follows[this.props.owner.id] ?
                this.setState({ followed: true }) :
                this.setState({ followed: false })
            
                )
                
        // Promise.all([this.props.fetchUserPosts(this.props.match.params.username), this.props.fetchOwnerByUsername(this.props.match.params.username)])
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username){
            this.setState({loaded: false})
            this.props.fetchOwnerByUsername(this.props.match.params.username)
                .then(() => this.props.fetchUserPosts(this.props.match.params.username))
                .then( () => this.setState({ loaded: true }))
                .then(() => this.props.fetchFollows("following"))
                .then(res =>
                    res.follows[this.props.owner.id] ?
                        this.setState({ followed: true }) :
                        this.setState({ followed: false })

                )
        }
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser().then(() => this.props.history.push('/login'))
        
    }

    handleFollow(e) {
        e.preventDefault();
        if (this.state.followed) {
            this.props.deleteFollow(this.props.follows[this.props.owner.id].id)
            // .then(this.props.fetchFollows('following'))
            .then(this.setState({ followed: false }) )
        } else {
            this.props.createFollow(this.props.owner.id)
            // .then(this.props.fetchFollows('following'))
            .then(this.setState({ followed: true }))
        }
    }


    render() {

        if (!this.props.posts && !this.props.owner && !this.props.errors) return null;

        if (this.props.errors.length) {
            return( 
            <div className="no-user-error">
                <p className="no-user">404: {this.props.errors[0]}</p>
            </div>
            )
        }

        if (!this.state.loaded) return <Loader type="Grid" color="rgb(98, 150, 209)" className="loading" />;

        let logout;
        let editprofile;
        let follow;
        let followText = this.state.followed ? <p>Unfollow</p> : <p>Follow</p>
        if (this.props.currentUser && this.props.match.params.username === this.props.currentUser.username) {
            logout = <button className="profile-user-options" onClick={this.handleLogout}>Logout</button>
            editprofile = <Link to="/accounts/edit">
                <button className="profile-user-options">Edit Profile</button>
            </Link>
            follow = null;
        } else {
            logout = null;
            editprofile = null;
            follow = <button className="follow-button" onClick={this.handleFollow}>{followText}</button>
        }
            
            const userposts = Object.values(this.props.posts);  
            
        const profilePic = this.props.owner.photoUrl ? <img className="profile-pic" src={this.props.owner.photoUrl} /> 
                : <img className="profile-pic" src="/user.png"/>;

            const bio = this.props.owner.bio;

            const name = this.props.owner.display_name;

             return ( 
                 <div className="profile-page">
                     <div className="profile-nav-wrapper">
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
                                 <p>{this.props.owner.num_followers} followers</p> 
                                 <br/>
                                 <p>{this.props.owner.num_following} following</p>
                            </div>
                            <div className="profile-info">
                                <p>{name}</p>
                                <p>{bio}</p>
                            </div>
                        </div>
                    </div>
                     </div>
                    <div className="profile-feed-wrapper">
                        <ul className="profile-feed">
                            {
                                userposts.reverse().map( post => (
                                    <li key={post.id}>
                                        <Link to={`/posts/${post.id}`}><img src={post.photoUrl} className="profile-feed-img" /></Link>
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