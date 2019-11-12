json.set! @post.id do 
    json.extract! @post, :id, :user_id, :caption
    # @post.comments.each do |comment|
    #     json.set! comment.id do   
    #         json.extract! comment, :id, :body, :user_id, :post_id
    #     end
    # end
    json.photoUrl url_for(@post.photo)
end
