class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
			t.string :email, null: false
			t.string :username, null: false
			t.string :password_digest
			t.string :session_token
      t.timestamps null: false
    end

		add_index :users,
						 [:username, :email, :session_token],
						 :unique => true
  end
end
