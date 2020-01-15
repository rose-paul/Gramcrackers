import React, { useState, useEffect } from 'react';
import FeedIndexItemContainer from './feed_index_item_container';
import Loader from 'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroll-component';



const Feed = props => {

    const [posts, setPosts] = useState(props.posts)
    const [currentUser] = useState(props.currentUser)
    const [loaded, setLoaded] = useState(false)
    const [offset, setOffset] = useState(0)
    const [morePosts, setNoMore] = useState(true)
    
    useEffect(() => {
      props
        .fetchFollows("following")
        .then(res => props.fetchFeedPosts(Object.keys(res.follows), offset))
        .then(res => setPosts(res.posts))
        .then(() => setOffset(offset + 5))
        .then(() => setLoaded(true));
    }, []);

    const fetchMorePosts = () => {
        props.fetchFollows("following").then( res =>
            props.fetchFeedPosts(Object.keys(res.follows), offset)
        )
        .then(res => {
            if (Object.keys(res.posts).length < 5) setNoMore(false);
            setPosts({...posts, ...res.posts})
        })
        .then( () => setOffset(offset + 5))
    }

    return loaded ? (
      <div className="feed-main">
        <header>
          <h2>Here you are, {currentUser.username}! </h2>
        </header>
        <ul className="feed-list">
          <InfiniteScroll
            id="feed-infinite"
            dataLength={Object.keys(posts).length}
            next={fetchMorePosts}
            hasMore={morePosts}
            loader={
                <Loader
                  type="Grid"
                  color="rgb(98, 150, 209)"
                  className="loading"
                />
            }
            endMessage={<div className="feed-end">No more posts.</div>}
          >
            {Object.values(posts).map(post => {
              return (
                <li>
                  <FeedIndexItemContainer key={post.id} post={post} />
                </li>
              );
            })}
          </InfiniteScroll>
        </ul>
      </div>
    ) : (
      <Loader type="Grid" color="rgb(98, 150, 209)" className="loading" />
    );
}
export default Feed;

