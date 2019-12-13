import React, { useState, useEffect } from 'react';

const LikeHook = props => {
    const initialCount = props.likes.length
    const initialLiked = props.likes.includes(props.currentUser.id) ? true : false
    const [likeCount, setCount] = useState(initialCount)
    const [liked, setLiked] = useState(initialLiked)

    const updateLikes = bool => {
        if (bool) {
            setLiked(true)
            setCount(likeCount + 1)
            let like = {
                user_id: props.currentUser.id,
                likeable_id: props.postId,
                likeable_type: "Post"
            }
            props.addLike(like)
        } else {
            setLiked(false)
            setCount(likeCount - 1)
            props.removeLike(props.postId, props.currentUser.id)
        }
    }


    let likeIcon = liked ?
        <img onClick={() => updateLikes(false)} src="/002-like.png" />
        : <img onClick={() => updateLikes(true)} src="/001-like-1.png" />

        let like = likeCount === 1 ? 'like' : 'likes';

        return (
        <div className="likes-div-feed">
            {likeIcon}
            <p>{likeCount} {like}</p>
        </div>
        )
}

export default LikeHook;