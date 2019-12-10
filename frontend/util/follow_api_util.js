export const fetchFollows = () => (
    $.ajax({
        method: 'GET',
        url: '/api/follows'
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