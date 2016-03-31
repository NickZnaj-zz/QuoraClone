class Question < ActiveRecord::Base
  validates :title, presence: true

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
