

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
