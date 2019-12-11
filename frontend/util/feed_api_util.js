export const fetchFeedPosts = userIds => (
    $.ajax({
        method: 'GET',
        url: '/api/feeds'
    })
)