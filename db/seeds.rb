# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.create!(
  title: "can you see me?",
  # user_id: 1
)

Question.create!(
  title: "this is another test, what do you think?",
)
Question.create!(
  title: "how is babby formed?",
)
Question.create!(
  title: "do you even lift bro?",
)
Question.create!(
  title: "am i doing this right?",
)

Answer.create!(
  body: "Sure can bro",
  question_id: 1
)

Answer.create!(
  body: "You're on the wrong site",
  question_id: 3
)

Answer.create!(
  body: "idk check yahoo answers",
  question_id: 3
)
