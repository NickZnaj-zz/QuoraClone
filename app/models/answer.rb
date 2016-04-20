class Answer < ActiveRecord::Base
	# include PgSearch

  validates :body, :user_id, :question_id, presence: true

  belongs_to :question
  belongs_to :user
	has_many :votes


	def score
		self.votes.where(value: true).count -
		self.votes.where(value: false).count
	end


end
