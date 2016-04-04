# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#


topics = (1..5).to_a.map do |n|
	name = Faker::Book.genre

	Topic.create!(
		name: name
	)
end

50.times do |n|
	title = Faker::Lorem.sentence + "?"
	user_id = rand(1..3)

	question = Question.create!(title: title, user_id: user_id)

	question.topic_ids = (topics[0].id)


	question.topic_ids = ([rand(1..topics.size)])

end

40.times do |n|
	body = Faker::Hacker.say_something_smart
	user_id = rand(1..3)
	question_id = rand(1..50)

	answer = Answer.create!(
	body: body,
	user_id: user_id,
	question_id: question_id
	)
end
