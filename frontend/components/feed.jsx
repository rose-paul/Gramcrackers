import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Feed = props => {

    const [posts, setPosts] = useState(props.posts)
    const [currentUser] = useState(props.currentUser)

    useEffect( () => {
        props.fetchFollows('following')
        .then( res => props.fetchFeedPosts(Object.keys(res.follows)))
        .then( res => setPosts(res.posts))
    }, [currentUser])

    return (
        <div className="feed-main">
            <h2>feed coming soon, {currentUser.username}</h2>
            <ul>
            {
                Object.values(posts).map( post => {
                    return <li key={post.id}>{post.caption}</li>
                })
            }
            </ul>
            <img src="/russia.png" alt=""/>
        </div>
    )
}
export default Feed;

