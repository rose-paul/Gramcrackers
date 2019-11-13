class Like < ApplicationRecord
    validates :likeable_id, uniqueness: {scope: [:user_id, :likeable_type]}

    belongs_to :likeable, polymorphic: true

    belongs_to :user
    
end
