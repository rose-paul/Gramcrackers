class AddIndexToFollowers < ActiveRecord::Migration[5.2]
  def change
    add_index :followers, [:user_id, :follower_id], unique: true
  end
end
