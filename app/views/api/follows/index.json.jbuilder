@follows.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :id, :user_id
        json.follower  follow.find_username(follow.user_id)
        json.following  follow.find_username(follow.following_id)
    end
end