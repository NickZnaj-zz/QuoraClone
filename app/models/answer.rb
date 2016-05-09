class Answer < ActiveRecord::Base
	# include PgSearch
	has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :body, :user_id, :question_id, presence: true

  belongs_to :question
  belongs_to :user
	has_many :votes


	def score
		self.votes.where(value: true).count -
		self.votes.where(value: false).count
	end


end
