class RenameTopicsQuestionsToQuestionsTopics < ActiveRecord::Migration
  def change
		rename_table :topics_questions, :questions_topics
  end
end
