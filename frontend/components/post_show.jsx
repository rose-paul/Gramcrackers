import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId)
            .then( () => this.props.fetchOwner(this.props.posts[postId].user_id))
            .then( () => this.setState({loaded: true}))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ loaded: false })
            this.props.fetchUserPosts(this.props.match.params.username)
                .then( () => this.setState({ loaded: true }))
        }
    }

    render () {

        const postId = this.props.match.params.id;
        if (!this.props.posts[postId]) return null;
        if (!this.state.loaded) return <p>loading</p>
        let ops = this.props.currentUser && this.props.currentUser.id
            === this.props.posts[postId].user_id ? <div className="post-options" onClick={() => this.props.postOptionsModal('postoptions', this.props.match.params.id)}> <img src="./three-dots-more-indicator.png" width="15" height="15"/></div>
            : null;
        const profilePic = this.props.owner.photoUrl ? <img className="profile-pic-small" src={this.props.owner.photoUrl}/> : <img src="https://img.icons8.com/color/48/000000/cheburashka.png" />
        return (
            <div className="post-show-main">
                <div className="post-show-row">
                <img src={this.props.posts[postId].photoUrl} height="400" width="400"/>
                    <div className="post-show-right">
                        <div>
                                <div className="post-show-user">
                                    {profilePic}
                                    {/* <img src="https://img.icons8.com/color/48/000000/cheburashka.png" /> */}
                                <Link className="username" to={`/${this.props.owner.username}`}><p>{this.props.owner.username} </p></Link>
                                    {ops}
                                </div>
                                <div className="post-show-comments">
                                    <div className="owner-caption">
                                    <Link className="username" to={`/${this.props.owner.username}`}><p>{this.props.owner.username} </p></Link>
                                    <p> {this.props.posts[postId].caption}</p>
                                    </div>
                                    <p>comments go here</p>
                                </div>
                        </div>
                            <div className="post-show-interact">
                                <input type="text" placeholder="Add a comment..."/>
                            </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default PostShow;