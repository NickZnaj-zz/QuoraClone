class Question < ActiveRecord::Base
  validates :title, presence: true

end
