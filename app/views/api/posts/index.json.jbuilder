json.array! @posts do |post| 
    json.extract! post, :id, :user_id
    json.photoUrl url_for(post.photo)
end