class Post < ApplicationRecord
    
    belongs_to :user

    validate :ensure_photo

    has_one_attached :photo

    def ensure_photo 
        if !self.photo.attached?
            errors[:photo].push("No photo attached")
        end
    end

end
