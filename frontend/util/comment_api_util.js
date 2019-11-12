export const fetchComments = postId => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}/comments`
    })
}