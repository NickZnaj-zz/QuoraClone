class ChangeColumnNameTypo < ActiveRecord::Migration
  def change
    remove_column :answers, :quesion_id, :integer
    add_column :answers, :question_id, :integer, null: false

  end
end
