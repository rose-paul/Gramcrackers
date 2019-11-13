export const fetchComments = postId => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}/comments`
    })
}

export const makeComment = comment => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts/${comment.postId}/comments`,
        data: comment
    })
}

export const deleteComment = comment => {
    debugger
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${comment.post_id}/comments/${comment.id}`
    })
}
