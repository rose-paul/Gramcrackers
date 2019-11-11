

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
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${formData.get('user[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

