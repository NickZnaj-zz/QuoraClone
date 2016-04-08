# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#


topics = (1..15).to_a.map do |n|
	name = Faker::Book.genre

	Topic.create!(
		name: name
	)
end

200.times do |n|
	title1 = "Where do I find a " + Faker::Commerce.product_name + "?"
	title2 = "How do I make a " + Faker::Commerce.product_name + "?"
	title3 = "What in the world is a " + Faker::Commerce.product_name + "?"
	user_id = rand(1..15)

	question = Question.create!(title: title1, user_id: user_id)
	question = Question.create!(title: title2, user_id: user_id)
	question = Question.create!(title: title3, user_id: user_id)

	question.topic_ids = (topics[0].id)


	question.topic_ids = ([rand(1..topics.size)])

end

1500.times do |n|
	body = Faker::Hacker.say_something_smart
	user_id = rand(1..15)
	question_id = rand(1..200)

	answer = Answer.create!(
	body: body,
	user_id: user_id,
	question_id: question_id
	)
end

15.times do |n|
	username = Faker::Name.name
	password = Faker::Internet.password(8)
	email = Faker::Internet.safe_email
end

7000.times do |n|
	user_id = rand(1..15)
	answer_id = rand(1..1800)
end
