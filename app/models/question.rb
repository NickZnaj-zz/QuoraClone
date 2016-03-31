class Question < ActiveRecord::Base
  validates :title, presence: true

  after_initialize :ensure_details

  def ensure_details
    if !self.details
      self.details = ""
    end
  end
end
