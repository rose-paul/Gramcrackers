@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :post_id, :user_id
        json.username  comment.find_username(comment.user_id)
    end
end