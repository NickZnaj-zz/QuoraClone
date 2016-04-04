# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.create!(
  title: "can you see me?",
  user_id: 1
)

Question.create!(
  title: "this is another test, what do you think?",
	user_id: 1
)
Question.create!(
  title: "how is babby formed?",
	user_id: 1

)
Question.create!(
  title: "do you even lift bro?",
	user_id: 2
)
Question.create!(
  title: "am i doing this right?",
	user_id: 2
)

Answer.create!(
  body: "Sure can bro",
  question_id: 1
)

Answer.create!(
  body: "You're on the wrong site",
  question_id: 3,
	user_id: 1
)

Answer.create!(
  body: "idk check yahoo answers",
  question_id: 3,
	user_id: 1

)
Answer.create!(
  body: "They need to do way instain mother> who kill thier babbys. becuse these babby cant frigth back? it was on the news this mroing a mother in ar who had kill her three kids. they are taking the three babby back to new york too lady to rest my pary are with the father who lost his children ; i am truley sorry for your lots",
  question_id: 3,
	user_id: 1
)
