# json.set! current_user.id do
  json.extract! @like, :id, :user_id, :likeable_id, :likeable_type
# end