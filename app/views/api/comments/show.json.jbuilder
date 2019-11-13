# json.set! @comment.id do 
    json.extract! @comment, :id, :body, :post_id, :user_id
# end