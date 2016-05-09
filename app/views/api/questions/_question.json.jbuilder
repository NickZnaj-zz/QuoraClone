json.extract!(
  question,
  :id, :title, :details, :user_id
)
json.answers question.answers
json.topics question.topics
json.user question.user
json.image_url asset_path(question.image.url)
