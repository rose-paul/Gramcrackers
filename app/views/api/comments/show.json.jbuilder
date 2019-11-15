# json.set! @comment.id do 
    json.extract! @comment, :id, :body, :post_id, :user_id
    json.username  current_user.username
# end