import React from 'react';


const CommentIndexItem = ({ comment, currentUser, commentOptionsModal, postUser  }) => (
        <div className="comment">
            {comment.body}
            {comment.user_id === currentUser.id || postUser === currentUser.id ?
                <div onClick={() => commentOptionsModal('commentoptions', comment)}>
                    <img src="./three-dots-more-indicator.png" width="15" height="15" />
                </div> : null }
        </div>
        )
        
export default CommentIndexItem;