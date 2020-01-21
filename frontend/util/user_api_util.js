export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
)

export const fetchUserByUsername = username => {
    return $.ajax({
        method: 'GET',
        url: '/api/users',
        data: {username}
    })
}

export const updateUser = formData => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${formData.get('user[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const searchUsers = username => {
    return $.ajax({
        method: 'GET',
        url: '/api/search',
        data: { username }
    })
}

