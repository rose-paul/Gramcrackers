export const fetchPosts = username => (
    $.ajax({
        method: 'GET',
        url: '/api/posts',
        data: { username }
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