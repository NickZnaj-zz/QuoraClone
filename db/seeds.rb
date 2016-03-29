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
  # user_id: 2
)
