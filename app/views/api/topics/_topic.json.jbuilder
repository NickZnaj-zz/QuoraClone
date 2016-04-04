json.extract!(
  topic,
  :id, :name
)
json.questions topic.questions
json.users topic.users
