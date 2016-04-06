class AddUserIdToAnswerVotes < ActiveRecord::Migration
  def change

		add_column :answer_votes, :user_id, :integer
  end
end
