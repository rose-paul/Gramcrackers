json.extract! @follow, :id, :user_id, :following_id
json.follower  @follow.find_username(@follow.user_id)
json.following @follow.find_username(@follow.following_id)