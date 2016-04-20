class TopicUser < ActiveRecord::Base
	# include PgSearch

	validates :user_id, :topic_id , presence: true

	belongs_to :user
	belongs_to :topic

	validates_associated :user, :topic

end
