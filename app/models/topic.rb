class Topic < ActiveRecord::Base
	include PgSearch
	
	multisearchable :against => :name

	has_and_belongs_to_many :questions
	has_and_belongs_to_many :users

end
