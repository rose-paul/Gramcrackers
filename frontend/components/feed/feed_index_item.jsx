import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../comments/comment';


const FeedIndexItem = props => {
    let userPhoto = props.post.userPhoto ? <img className="profile-pic-small" src={props.post.userPhoto} /> : <img className="profile-pic-small" src="/user.png" />
    return (
        <div className="feed-item-whole">
            <span>
                <Link to={`/${props.post.username}`}>{userPhoto}</Link> <Link to={`/${props.post.username}`}>{props.post.username}</Link>
            </span>
            <img className="post" src={props.post.photoUrl} alt=""/>
            
            <div className="caption">
                <Link to={`/${props.post.username}`}><b>{props.post.username}</b></Link>
                <p>{props.post.caption}</p>
            </div>
            <Comment
                feedItem="true"
                postId={props.post.id}
                currentUser={props.currentUser}
                addComment={props.addComment}
            />
        </div>
    )
}

export default FeedIndexItem;