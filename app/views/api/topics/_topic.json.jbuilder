json.extract!(
  topic,
  :id, :name
)
json.questions topic.questions do |question|
  json.id question.id
	json.topics question.topics
	json.answers question.answers
	json.user question.user
	json.title question.title
end
json.users topic.users
