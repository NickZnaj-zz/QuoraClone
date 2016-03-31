class Answer < ActiveRecord::Base
  validates :body, :user_id, :question_id, presence: true
end
