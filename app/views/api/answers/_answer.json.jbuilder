json.extract!(
  answer,
  :id, :body, :user_id, :question_id
)

json.votes answer.votes
json.score answer.score
json.user answer.user
json.question answer.question
