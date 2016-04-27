json.extract!(
  user,
  :id, :username, :email
)
json.questions user.questions
json.topics user.topics
json.answers user.answers.each do |answer|
  json.partial!('api/answers/answer', answer: answer)
end

json.votes user.votes
json.image_url asset_path(user.image.url)
