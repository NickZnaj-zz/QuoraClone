class ChangeUidToBigInt < ActiveRecord::Migration
  def change
    remove_column :users, :uid, :integer
    add_column :users, :uid, :integer, :limit => 5

  end
end
