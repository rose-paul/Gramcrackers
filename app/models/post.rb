class Post < ApplicationRecord
    
    belongs_to :user

    has_many :comments, dependent: :destroy

    has_many :likes, as: :likeable, dependent: :destroy


    validate :ensure_photo

    has_one_attached :photo

    def find_user_likes 
        ret = []
        self.likes.each do |like|
            ret << like.user_id
        end
        return ret
    end

    def ensure_photo 
        if !self.photo.attached?
            self.errors[:photo].push("must be attached") 
        end
    end

end
