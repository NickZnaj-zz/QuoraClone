class CreateAnswerVotes < ActiveRecord::Migration
  def change
    create_table :answer_votes do |t|
			t.integer :answer_id, null:false
			
			t.timestamps
    end
  end
end
