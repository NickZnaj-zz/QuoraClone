class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :body, null: false, default: ""
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
