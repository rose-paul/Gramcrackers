export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
)
export const fetchPost = postId => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`
    })
)
export const createPost = () => (
    $.ajax({
        method: 'POST',
        url: '/api/posts'
    })
)