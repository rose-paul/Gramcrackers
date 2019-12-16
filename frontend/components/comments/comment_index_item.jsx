import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ({ comment, currentUser, commentOptionsModal, postUser, feedItem, updateComments  }) => {
        let klass = feedItem ? 'comment-feed' : 'comment'
    
       return ( 
       <div className={klass}>
            <Link className="comment-link" to={`/${comment.username}`}>{comment.username}</Link>
            {comment.body}
            {comment.user_id === currentUser.id || postUser === currentUser.id ?
                <div onClick={() => commentOptionsModal('commentoptions', comment, updateComments)}>
                    <img src="./three-dots-more-indicator.png" width="15" height="15" />
                </div> : null }
        </div>
        )
}

        
export default CommentIndexItem;