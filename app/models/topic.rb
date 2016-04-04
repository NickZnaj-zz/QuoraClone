class Topic < ActiveRecord::Base
	has_many_and_belongs_to :questions
	
end
