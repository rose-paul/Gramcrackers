json.extract! user, :id, :username, :email, :first_name, 
    :last_name, :birthday, :gender, :bio, :display_name
if user.photo.attached?
    json.photoUrl url_for(user.photo) 
end