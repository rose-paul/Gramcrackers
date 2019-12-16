@users.each do |user|
    json.set! user.id do
        json.key user.id  
        json.name user.username
        json.value user.username
        if user.photo.attached?
            json.photo url_for(user.photo) 
        end
    end
end