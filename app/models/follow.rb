class Follow < ApplicationRecord

    validates :user_id, uniqueness: { scope: [:following_id] }
    
    belongs_to :follower, ##Click on follow. Belongs to person who clicked. 
        foreign_key: :user_id,
        class_name: :User

    belongs_to :following,  ##Belongs to person who was clicked on. 
        foreign_key: :following_id,
        class_name: :User

    def find_username(user_id)
     user = User.find_by(id: user_id)
     return user.username
    end
    
end
