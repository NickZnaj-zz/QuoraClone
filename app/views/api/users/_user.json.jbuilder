json.extract!(
  user,
  :id, :username, :email
)
json.questions user.questions
json.topics user.topics
json.answers user.answers
