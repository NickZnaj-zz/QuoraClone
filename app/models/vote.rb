class Vote < ActiveRecord::Base

	validates :answer_id, :user_id,  presence: true
	validates_uniqueness_of :answer_id, scope: :user_id

	belongs_to :user
	belongs_to :answer
end
