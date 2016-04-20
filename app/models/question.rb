class Question < ActiveRecord::Base
	include PgSearch
	multisearchable :against => :title

  validates :title, presence: true

	has_and_belongs_to_many :topics
  has_many :answers
  belongs_to :user

  after_initialize :ensure_details
  after_initialize :ensure_user_id

  def ensure_details
    if !self.details
      self.details = ""
    end
  end

  def ensure_user_id
    if !self.user_id
      self.user_id = 1
    end
  end
end
