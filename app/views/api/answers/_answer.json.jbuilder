json.extract!(
  answer,
  :id, :body, :user_id, :question_id
)

json.votes answer.votes
