import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './comments/comment';
import CommentIndexItem from './comments/comment_index_item';

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
            .then( () => this.props.fetchComments(postId))
            .then( () => this.props.fetchLikes(postId))
            .then( () => this.setState({loaded: true}))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ loaded: false })
            this.props.fetchUserPosts(this.props.match.params.username)
                .then( () => this.props.fetchComments(postId))
                .then( () => this.props.fetchLikes(postId))
                .then( () => this.setState({ loaded: true }))
        }
    }

    render () {

        const postId = this.props.match.params.id;
        if (!this.props.posts[postId]) return null;
        if (!this.state.loaded) return <h1 className="loading">loading</h1>
        let ops = this.props.currentUser && this.props.currentUser.id
            === this.props.posts[postId].user_id ? <div className="post-options" onClick={() => this.props.postOptionsModal('postoptions', this.props.match.params.id)}> <img src="./three-dots-more-indicator.png" width="15" height="15"/></div>
            : <div className="post-options"></div>;
        const profilePic = this.props.owner.photoUrl ? <img className="profile-pic-small" src={this.props.owner.photoUrl}/> : <img src="https://img.icons8.com/color/48/000000/cheburashka.png" />
        const comments = Object.values(this.props.comments)
        const likeCount = Object.keys(this.props.likes).length;
        return (
            <div className="post-show-main">
                <div className="post-show-row">
                <img src={this.props.posts[postId].photoUrl} height="450" width="450"/>
                    <div className="post-show-right">
                        <div>
                                <div className="post-show-user">
                                    {profilePic}
                                    {/* <img src="https://img.icons8.com/color/48/000000/cheburashka.png" /> */}
                                <Link className="username" to={`/${this.props.owner.username}`}><p>{this.props.owner.username} </p></Link>
                                    {ops}
                                </div>
                                <div className="post-show-comments">
                                   
                                    <ul className="comments-ul">
                                    <div className="owner-caption">
                                        <Link className="username" to={`/${this.props.owner.username}`}><p>{this.props.owner.username} </p></Link>
                                        <p> {this.props.posts[postId].caption}</p>
                                    </div>
                                        {
                                            comments.map ( comment => (
                                                <CommentIndexItem 
                                                comment={comment} 
                                                currentUser={this.props.currentUser} 
                                                commentOptionsModal={this.props.commentOptionsModal}
                                                postUser={this.props.posts[postId].user_id}
                                                key={comment.id}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                        </div>
                        <div className="likes-div">
                            Liked by {likeCount} others
                        </div>
                        <Comment 
                        postId={postId} 
                        currentUser={this.props.currentUser}
                        addComment={this.props.addComment}
                        />
                       
                    </div>
                </div>
            </div>
            
        )
    }
}

export default PostShow;