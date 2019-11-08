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
export const createPost = (formData) => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const deletePost = postId => (
    $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
    })
)