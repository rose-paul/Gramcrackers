export const fetchPostLikes = postId => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}/likes`
    })
}
