json.array!(@questions) do |question|
  json.partial!('question', question: question)
	json.answers question.answers
end
