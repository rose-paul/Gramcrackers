@followers.each do |follower|
    json.set! follower.id do 
        json.extract! follower, :id, :user_id
        json.username  follower.find_username(follower.user_id)
    end
end