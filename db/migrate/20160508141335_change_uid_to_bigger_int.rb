class ChangeUidToBiggerInt < ActiveRecord::Migration
  def change
    remove_column :users, :uid, :integer, :limit => 5
    add_column :users, :uid, :integer, :limit => 8

  end
end
