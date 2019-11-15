class Comment < ApplicationRecord
    validates :body, presence: true
    has_many :likes, as: :likeable, dependent: :destroy
    belongs_to :post
    belongs_to :user

    def find_username(user_id)
        user = User.find_by(id: user_id)
        return user.username
    end
end
