json.extract!(
  current_user,
  :id, :username, :email
)
json.questions current_user.questions
json.topics current_user.topics
json.answers current_user.answers
