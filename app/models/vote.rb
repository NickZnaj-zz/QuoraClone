class Vote < ActiveRecord::Base

	validates :answer_id, presence: true

	belongs_to :user
	belongs_to :answer
end
