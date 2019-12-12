import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LikeHook from '../likes/like_hook'
import Comment from '../comments/comment';
import CommentIndexItem from '../comments/comment_index_item';

const FeedIndexItem = props => {
    let userPhoto = props.post.userPhoto ? <img className="profile-pic-small" src={props.post.userPhoto} /> : <img className="profile-pic-small" src="/user.png" />
    return (
        <div className="feed-item-whole">
            <span>
                <Link to={`/${props.post.username}`}>{userPhoto}</Link> <Link to={`/${props.post.username}`}>{props.post.username}</Link>
            </span>
            <img className="post" src={props.post.photoUrl} alt=""/>
            <LikeHook 
                likes={props.post.likes}
                addLike={props.addLike}
                removeLike={props.removeLike}
                currentUser={props.currentUser}
                postId={props.post.id}
            />
            
            <div className="caption">
                <Link to={`/${props.post.username}`}><b>{props.post.username}</b></Link>
                <p>{props.post.caption}</p>
            </div>

            <div>
                {
                    props.post.comments.map(comment => (
                        <CommentIndexItem
                            comment={comment}
                            currentUser={props.currentUser}
                            commentOptionsModal={props.commentOptionsModal}
                            postUser={props.post.user_id}
                            key={comment.id}
                        />
                    ))
                }
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