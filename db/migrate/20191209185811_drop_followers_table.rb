class DropFollowersTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :followers
  end

  def down 
    raise ActiveRecord::IrreversibleMigration
  end
end
