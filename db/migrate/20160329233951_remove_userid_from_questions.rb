class RemoveUseridFromQuestions < ActiveRecord::Migration
  def change
    remove_column :questions, :user_id, :integer
  end
end
