export const fetchFollows = type => ( // user's followers
    $.ajax({
        method: 'GET',
        url: '/api/follows',
        data: { type }
    })
)

export const createFollow = followingId => {
    // who are they following
        return $.ajax({
            method: 'POST',
            url: '/api/follows',
            data: { followingId }
        })
    
} 

export const deleteFollow = followId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/follows/${followId}`
    })
}