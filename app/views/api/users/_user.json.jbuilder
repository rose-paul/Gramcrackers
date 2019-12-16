json.extract! user, :id, :username, :email, :first_name, 
    :last_name, :birthday, :gender, :bio, :display_name
if user.photo.attached?
    json.photoUrl url_for(user.photo) 
end
json.user_follows user.find_following(user)
json.num_followers user.followers.length
json.num_following  user.followings.length