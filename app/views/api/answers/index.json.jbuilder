json.array!(@answers) do |answer|
  json.partial!('answer', answer: answer)
end
