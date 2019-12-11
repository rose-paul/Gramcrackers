import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
const Feed = props => {

    const [posts] = useState(props.posts)

    useEffect( () => {
        props.fetchFollows('following').then( res => 
            props.fetchFeedPosts(Object.keys(res.follows))
        )
    })

    console.log(posts)

    return (
        <div className="feed-main">
            <h2>feed coming soon</h2>
            <img src="/russia.png" alt=""/>
        </div>
    )
}
export default Feed;

