json.set! @post.id do 
    json.extract! @post, :id, :user_id, :caption
    json.photoUrl url_for(@post.photo)
end