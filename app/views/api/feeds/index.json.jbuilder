@posts.each do |post| 
    json.set! post.id do 
        json.extract! post, :id, :user_id, :caption
        json.username post.user.username
        json.comments post.comments.each do |comment|
                json.extract! comment, :id, :user_id, :body 
                json.username comment.user.username
        end
            if post.likes.length > 0
                # json.likes post.likes.each do |like|
                #         json.set! like.user_id do    
                #             json.extract! like, :user_id, :likeable_id
                #         end
                #     end
                json.likes post.find_user_likes 
            else 
                json.likes post.likes
            end
        

        if post.user.photo.attached?
            json.userPhoto url_for(post.user.photo) 
        end
        json.photoUrl url_for(post.photo)
    end
end