class Post < ApplicationRecord
    
    belongs_to :user

    has_many :comments

    validate :ensure_photo

    has_one_attached :photo

    def ensure_photo 
        if !self.photo.attached?
            self.errors[:photo].push("must be attached") 
        end
    end

end
