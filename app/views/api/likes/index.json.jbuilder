@likes.each do |like|
    json.extract! like, :id, :user_id, :likeable_id, :likeable_type
end