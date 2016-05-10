class Topic < ActiveRecord::Base
	include PgSearch

	multisearchable :against => :name

	has_and_belongs_to_many :questions
	has_and_belongs_to_many :users

	has_attached_file :image, default_url: "test_avatar.png"
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
