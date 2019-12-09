json.extract! @follow, :id, :user_id
json.username  @follow.find_username(@follow.user_id)