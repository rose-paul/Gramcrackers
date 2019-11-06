import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
class Feed extends React.Component{
    render() {
        return (
            <div className="feed-main">
                <h2>feed</h2>
                <img src="https://img.icons8.com/dusk/64/000000/russia-map.png"/>
            </div>
        )
    }
}
export default Feed;