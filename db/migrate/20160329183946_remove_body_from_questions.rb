class RemoveBodyFromQuestions < ActiveRecord::Migration
  def change
    remove_column :questions, :body, :text
  end
end
