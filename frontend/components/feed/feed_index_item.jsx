import React, { useState, useEffect } from 'react';

const FeedIndexItem = props => {
    debugger
    return (
        <div>
            <img src={props.post.photoUrl} alt=""/>
            <p>{props.post.caption}</p>
        </div>
    )
}

export default FeedIndexItem;