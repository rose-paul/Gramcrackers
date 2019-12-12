import React, { useState, useEffect } from 'react';
import FeedIndexItemContainer from './feed_index_item_container';
import Loader from 'react-loader-spinner'


const Feed = props => {

    const [posts, setPosts] = useState(props.posts)
    const [currentUser] = useState(props.currentUser)
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        props.fetchFollows('following')
        .then( res => props.fetchFeedPosts(Object.keys(res.follows)))
        .then( res => setPosts(res.posts))
        .then( () => setLoaded(true))
    }, [])

    return loaded ? (
        <div className="feed-main">
            <header>
                <h2>Here you are, {currentUser.username}! </h2>
                <img src="/russia.png" alt="" />
            </header>
            <ul className="feed-list">
            {
                Object.values(posts).reverse().map( post => {
                    return (<li><FeedIndexItemContainer post={post} /></li>)
                })
            }
            </ul>
            
        </div>
    ) : <Loader type="Grid" color="rgb(98, 150, 209)" className="loading" />
}
export default Feed;

