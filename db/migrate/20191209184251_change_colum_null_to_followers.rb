class ChangeColumNullToFollowers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :followers, :user_id, false
    change_column_null :followers, :follower_id, false
  end
end
