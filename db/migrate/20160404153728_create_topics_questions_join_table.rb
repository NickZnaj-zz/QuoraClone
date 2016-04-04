class CreateTopicsQuestionsJoinTable < ActiveRecord::Migration
  def change
		create_table :topics_questions, id: false do |t|
      t.integer :topic_id
      t.integer :question_id
    end

    add_index :topics_questions, :topic_id
    add_index :topics_questions, :question_id
  end
end
