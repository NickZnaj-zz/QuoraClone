class RenameAnswerVotesToVotes < ActiveRecord::Migration
  def change
		rename_table :answer_votes, :votes
  end
end
