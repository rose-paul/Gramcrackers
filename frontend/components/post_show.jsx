import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId).then(
            () => this.props.fetchOwner(this.props.posts[postId].user_id)
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.fetchUserPosts(this.props.match.params.username);
        }
    }

    render () {
        // let deleteButton = this.props.currentUser && this.props.currentUser.id 
        //     === this.props.posts.user_id ? 
        //         <button onClick={() => this.props.deletePhoto(this.props.posts.id)
        //             .then(this.props.history.push(`/${this.props.owner.username}`))}>Delete</button> 
        //         : null
        // let editButton = this.props.currentUser && this.props.currentUser.id
        //     === this.props.posts.user_id ? <button onClick={() => this.props.editPostModal
        //         ('editpost', this.props.match.params.id)}>Edit Post</button> : null ;
        const postId = this.props.match.params.id;
        if (!this.props.posts[postId]) return null;
        ///HERE I HAVE PARAMS
        let ops = this.props.currentUser && this.props.currentUser.id
            === this.props.posts[postId].user_id ? <div className="post-options" onClick={() => this.props.postOptionsModal('postoptions', this.props.match.params.id)}> <img src="./three-dots-more-indicator.png" width="15" height="15"/></div>
            : null;

        return (
            <div className="post-show-main">
                <div className="post-show-row">
                <img src={this.props.posts[postId].photoUrl} height="400" width="400"/>
                    <div className="post-show-right">
                        <div>
                                <div className="post-show-user">
                                    <img src="https://img.icons8.com/color/48/000000/cheburashka.png" />
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