class Answer < ActiveRecord::Base
	# include PgSearch

  validates :body, :user_id, :question_id, presence: true

  belongs_to :question
  belongs_to :user
	has_many :votes

  after_initialize :ensure_user_id

  def ensure_user_id
    if !self.user_id
      self.user_id = 1
    end
  end
end
