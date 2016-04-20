class AddDetailsToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :details, :text
  end
end
