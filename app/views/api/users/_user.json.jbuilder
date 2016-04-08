json.extract!(
  user,
  :id, :username, :email
)
json.questions user.questions
json.topics user.topics
json.answers user.answers
json.votes user.votes
json.image_url asset_path(user.image.url)
