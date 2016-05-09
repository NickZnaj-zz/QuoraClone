class AddImageToAnswers < ActiveRecord::Migration
  def self.up
    change_table :answers do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :answers, :image
  end
end
