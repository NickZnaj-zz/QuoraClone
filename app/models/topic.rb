class Topic < ActiveRecord::Base
	include PgSearch
	has_and_belongs_to_many :questions
	has_and_belongs_to_many :users

end
