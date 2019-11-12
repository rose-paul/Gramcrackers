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