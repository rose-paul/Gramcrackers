import React, { useState, useEffect } from 'react';
import FeedIndexItem from './feed_index_item';


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
            <header>
                <h2>Here you are {currentUser.username}! </h2>
                <img src="/russia.png" alt="" />
            </header>
            <ul className="feed-list">
            {
                Object.values(posts).map( post => {
                    return (<li><FeedIndexItem post={post} /></li>)
                })
            }
            </ul>
            
        </div>
    )
}
export default Feed;

