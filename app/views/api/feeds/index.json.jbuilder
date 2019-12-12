@posts.each do |post| 
    json.set! post.id do 
        json.extract! post, :id, :user_id, :caption
        json.username post.user.username
        json.comments post.comments
        json.likes post.likes.each do |like|
                json.set! like.user_id do    
                    json.extract! like, :user_id, :likeable_id
                end
            end
        if post.user.photo.attached?
            json.userPhoto url_for(post.user.photo) 
        end
        json.photoUrl url_for(post.photo)
    end
end