import React, { useState, useEffect } from 'react';

const LikeHook = props => {
    let initial = props.likes.length
    let initialLiked = props.likes[props.currentUser.id] ? true : false
    const [likeCount, setCount] = useState(initial)
    const [liked, setLiked] = useState(initialLiked)

    const updateLikes = bool => {
        if (bool) {
            let like = {
                user_id: props.currentUser.id,
                likeable_id: props.postId,
                likeable_type: "Post"
            }
            setLiked(true)
            setCount(likeCount + 1)
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

        return (
        <div className="likes-div">
            {likeIcon}
            <p>{likeCount} likes</p>
        </div>
        )
}

export default LikeHook;