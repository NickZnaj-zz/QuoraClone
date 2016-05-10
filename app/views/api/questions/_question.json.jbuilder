json.extract!(
  question,
  :id, :title, :details, :user_id
)
json.answers question.answers do |answer|
  json.id answer.id
  json.user answer.user
  json.body answer.body
  json.user_id answer.user_id
  json.question_id answer.question_id

end
json.topics question.topics
json.user question.user
json.image_url asset_path(question.image.url)
