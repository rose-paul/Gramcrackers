class AddNotNullToFollowers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :followers, :user_id, true
    change_column_null :followers, :follower_id, true
  end
end
