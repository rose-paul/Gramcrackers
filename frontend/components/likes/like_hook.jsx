import React, { useState, useEffect } from 'react';

const LikeHook = props => {
    debugger
    let initial = props.likes.length
    const [likeCount, setCount] = useState(initial)
    const [liked, setLiked] = useState(false)
    
    useEffect(() => {
        if (liked) {
            setCount(likeCount + 1)
        } else {
            if (likeCount < 0) {
                setCount(0)
            } else {
                likeCount === 0 ? setCount(0) : setCount(likeCount - 1) 
                // fix initial render 
            }
        } 
    }, [liked])

    let likeIcon = liked ?
        <img onClick={() => setLiked(false)} src="/002-like.png" />
        : <img onClick={() => setLiked(true)} src="/001-like-1.png" />

        return (
        <div className="likes-div">
            {likeIcon}
            <p>liked by {likeCount} others</p>
        </div>
        )
}

export default LikeHook;