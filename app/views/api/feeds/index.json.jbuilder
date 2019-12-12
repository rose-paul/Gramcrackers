@posts.each do |post| 
    json.set! post.id do 
        json.extract! post, :id, :user_id, :caption
        json.username post.user.username
        json.comments post.comments
        if post.user.photo.attached?
            json.userPhoto url_for(post.user.photo) 
        end
        json.photoUrl url_for(post.photo)
    end
end