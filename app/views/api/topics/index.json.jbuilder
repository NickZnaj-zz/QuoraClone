json.array!(@topics) do |topic|
  json.partial!('topic', topic: topic)
end
