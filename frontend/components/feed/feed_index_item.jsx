import React, { useState, useEffect } from 'react';
import Comment from '../comments/comment';


const FeedIndexItem = props => {
    let userPhoto = props.post.userPhoto ? <img className="profile-pic-small" src={props.post.userPhoto} /> : <img className="profile-pic-small" src="/user.png" />
    return (
        <div className="feed-item-whole">
            <span>
                {userPhoto} <b>{props.post.username}</b>
            </span>
            <img className="post" src={props.post.photoUrl} alt=""/>
            <p>{props.post.caption}</p>
        </div>
    )
}

export default FeedIndexItem;