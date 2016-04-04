class CreateTopicsUsersJoinTable < ActiveRecord::Migration
  def change
		create_table :topics_users, id: false do |t|
			t.integer :topic_id
			t.integer :user_id
		end

		add_index :topics_users, :topic_id
		add_index :topics_users, :user_id
  end
end
