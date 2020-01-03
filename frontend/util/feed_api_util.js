export const fetchFeedPosts = (userIds, margin) => {
    return $.ajax({
        method: 'GET',
        url: '/api/feeds',
        data: { userIds, margin }
    })
}


